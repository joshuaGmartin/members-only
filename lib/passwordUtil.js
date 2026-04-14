const bcrypt = require("bcryptjs");

async function hashPassword(password) {
  const hashedPassword = await bcrypt.hash(password, 12); // 12 rounds is standard
  return hashedPassword;
}

module.exports = {
  hashPassword,
};
