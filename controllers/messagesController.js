const message = require("../models/message");

async function getMessages(req, res) {
  const messages = await message.getAllMessages();

  res.render("messages/messages", { messages: messages });
}

module.exports = { getMessages };
