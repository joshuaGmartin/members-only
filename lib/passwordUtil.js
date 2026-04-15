const bcrypt = require("bcryptjs");
const user = require("../models/user");

async function hashPassword(password) {
  return await bcrypt.hash(password, 12); // 12 rounds is standard
}

async function validatePassword(passwordInput, userPassword) {
  return await bcrypt.compare(passwordInput, userPassword);
}

module.exports = {
  hashPassword,
  validatePassword,
};
