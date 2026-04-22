const message = require("../models/message");

async function postDeleteMessage(req, res) {
  await message.deleteMessage(req.body.message_id);

  res.redirect("/messages");
}

module.exports = { postDeleteMessage };
