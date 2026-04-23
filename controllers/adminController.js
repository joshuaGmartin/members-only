const message = require("../models/message");
const { seedBD } = require("../config/database");

function getAdminDashboard(req, res) {
  res.render("admin/dashboard");
}

async function postDeleteMessage(req, res) {
  await message.deleteMessage(req.body.message_id);

  res.redirect("/messages");
}

async function postReset(req, res) {
  await seedBD();

  res.redirect("/");
}

module.exports = { getAdminDashboard, postDeleteMessage, postReset };
