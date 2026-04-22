const { body, matchedData, validationResult } = require("express-validator");
const message = require("../models/message");

const validator = [
  body("title").trim().notEmpty().withMessage("Must include title"),
  body("text").trim().notEmpty().withMessage("Must include body"),
];

function getWelcome(req, res) {
  res.render("member/welcome");
}

function getNewMessage(req, res) {
  res.render("member/new-message");
}

const postNewMessage = [
  validator,

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const values = req.body;

      return res.render("member/new-message", {
        errors: errors.array(),
        values: values,
      });
    }

    const { title, text } = matchedData(req);
    await message.createNewMessage(req.user.id, title, text);

    res.redirect("/messages");
  },
];

module.exports = { getWelcome, getNewMessage, postNewMessage };
