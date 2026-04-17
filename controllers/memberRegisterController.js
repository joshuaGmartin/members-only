const { body, validationResult } = require("express-validator");
// const user = require("../models/user");
// const passwordUtil = require("../lib/passwordUtil");

function validateQuiz() {
  let quizChecks = [];

  for (const [q, qData] of Object.entries(quiz)) {
    quizChecks.push(
      body(q)
        .trim()
        // .notEmpty()
        // .withMessage("Must include username")
        .custom((value) => {
          if (value !== qData.a) {
            throw new Error(`Question #${q.slice(1)} is incorrect`);
          }
          return true;
        }),
    );
  }

  return quizChecks;
}

const quiz = {
  q1: {
    q: `"I hate Illinois ___________."`,
    a: "Nazis",
    hint: `"We're on a mission from God."`,
  },
  q2: {
    q: `"Heeeeeeere's ___________!"`,
    a: "Johnny",
    hint: `"Perhaps... they need a good... talking to... if you don't mind my saying so."`,
  },
  q3: {
    q: `"It's a ___________!"`,
    a: "trap",
    hint: `"I've got a bad feeling about this..."`,
  },
  q4: {
    q: `"African or ___________?..."`,
    a: "European",
    hint: `"What's your favorite color?"`,
  },
  q5: {
    q: `"You've got ___________ on you."`,
    a: "red",
    hint: `"Thanks, Babe."`,
  },
  q6: {
    q: `"Say '___________' again! I dare you!"`,
    a: "what",
    hint: `"Ah man, I shot Marvin in the face."`,
  },
  q7: {
    q: `"He chose... ___________."`,
    a: "poorly",
    hint: `"It belongs in a museum!"`,
  },
  q8: {
    q: `"How ___________, is it not?!"`,
    a: "beautiful",
    hint: `"Vi Veri Veniversum Vivus Vici."`,
  },
  q9: {
    q: `"Boil 'em, mash 'em, stick 'em in a ___________."`,
    a: "stew",
    hint: `"Looks like meat's back on the menu, boys!"`,
  },
  q10: {
    q: `"I gotcha you for three minutes. Three minutes of ___________!"`,
    a: "playtime",
    hint: `"I missed the part where that's my problem"`,
  },
};

module.exports.getMemberRegister = function (req, res) {
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

      return res.render("member-register", {
        errors: errors.array(),
        values: values,
        quiz: quiz,
      });
    }
    // await user.createUser(username, hashedPassword);

    res.redirect("/login");
  },
];
