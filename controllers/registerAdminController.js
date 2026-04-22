const { body, matchedData, validationResult } = require("express-validator");
const user = require("../models/user");

const validator = [
  body("q1").custom((value) => {
    if (value !== "true") throw new Error();
    return true;
  }),
  body("q2").custom((value) => {
    if (value !== "true") throw new Error();
    return true;
  }),
  body("q3").custom((value) => {
    if (value !== "true") throw new Error();
    return true;
  }),
];

function getAdminRegister(req, res) {
  res.render("member/admin-register");
}

const postAdminRegister = [
  validator,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("member/admin-register", { errors: errors });
    }

    await user.makeUserAdmin(req.user.id);

    res.redirect("/messages");
  },
];

module.exports = {
  getAdminRegister,
  postAdminRegister,
};
