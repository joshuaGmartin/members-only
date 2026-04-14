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
