const { body, matchedData, validationResult } = require("express-validator");
const passwordUtil = require("../lib/passwordUtil");
const passport = require("passport");

const validateUser = [
  body("username").trim().notEmpty().withMessage("Must include username"),
  body("password").trim().notEmpty().withMessage("Must include password"),
];

module.exports.getLogin = function (req, res) {
  res.render("login");
};

module.exports.postLogin = (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      const values = req.body; // no send back bad password for UX?
      const errors = { msg: info.message }; // convert authentication failure to error display over form

      return res.status(401).render("login", {
        errors: [errors],
        values: values,
      });
    }

    res.redirect("/");
  })(req, res, next);
};
