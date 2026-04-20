const { body, validationResult } = require("express-validator");
const memberQuiz = require("../lib/memberQuiz");
const user = require("../models/user");

// this only checks for right answers to pass to validation
function validateQuiz() {
  let quizChecks = [];
  const quiz = memberQuiz.createQuiz();

  for (const [q, qData] of Object.entries(quiz)) {
    //create array of validation middlewares to run on post
    quizChecks.push(
      body(q)
        .trim()
        .custom((value) => {
          if (value.toLowerCase() !== qData.a.toLowerCase()) {
            // still need error(s) to attach to req for quiz validation
            throw new Error();
          }
          return true;
        }),
    );
  }

  return quizChecks;
}

module.exports.getRegisterMember = function (req, res) {
  const quiz = memberQuiz.createQuiz();

  res.render("register/member", { quiz: quiz });
};

module.exports.postRegisterMember = [
  async (req, res, next) => {
    const validators = validateQuiz();

    for (const validator of validators) {
      // forEach no wait for async
      await validator.run(req);
    }

    next();
  },
  // will run without async, but good form to wait before redirect
  async function (req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const values = req.body;
      const gradedQuiz = memberQuiz.checkQuiz(values);

      return res.render("register/member", {
        errors: errors.array(),
        values: values,
        quiz: gradedQuiz,
      });
    }

    await user.makeUserMember(req.user.id);

    res.redirect("/member/welcome");
  },
];
