const pgPool = require("../config/database");

module.exports.createUser = async function (username, password) {
  const query = `
    INSERT INTO users (username, password)
    VALUES ($1, $2)
    RETURNING *;
  `;
  // default is non-member, non-admin
  const values = [username, password];

  const result = await pgPool.query(query, values);
  return result.rows[0];
};

module.exports.makeUserMember = async function (userID) {
  const query = `
    UPDATE users
    SET is_member = true
    WHERE id = $1
    RETURNING *;
  `;
  const values = [userID];

  const result = await pgPool.query(query, values);
  return result.rows[0];
};

module.exports.makeUserAdmin = async function (userID) {
  const query = `
    UPDATE users
    SET is_admin = true
    WHERE id = $1
    RETURNING *;
  `;
  const values = [userID];

  const result = await pgPool.query(query, values);
  return result.rows[0];
};

module.exports.findByUsername = async function (username) {
  const query = `
    SELECT * FROM users
    WHERE username = $1;
  `;
  // default is non-member, non-admin
  const values = [username];

  const result = await pgPool.query(query, values);
  return result.rows[0];
};

module.exports.findByUserID = async function (userID) {
  const query = `
    SELECT * FROM users
    WHERE id = $1;
  `;
  // default is non-member, non-admin
  const values = [userID];

  const result = await pgPool.query(query, values);
  return result.rows[0];
};
