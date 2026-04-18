const { body, validationResult } = require("express-validator");
const memberQuiz = require("../lib/memberQuiz");

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

module.exports.getMemberRegister = function (req, res) {
  const quiz = memberQuiz.createQuiz();

  res.render("member-register", { quiz: quiz });
};

module.exports.postMemberRegister = [
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

      return res.render("member-register", {
        errors: errors.array(),
        values: values,
        quiz: gradedQuiz,
      });
    }

    res.redirect("/member-success");
  },
];
