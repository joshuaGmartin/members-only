const pgPool = require("../config/database");
const { formatDistanceToNow } = require("date-fns");

module.exports.getAllMessages = async () => {
  const query = `
    SELECT * FROM messages
    JOIN users ON user_id = users.id
    ORDER BY created_at DESC;
  `;

  const { rows } = await pgPool.query(query);

  // add time ago to each message
  rows.forEach((row) => {
    const time_ago = formatDistanceToNow(new Date(row.created_at), {
      addSuffix: true,
    });

    row.time_ago = time_ago;
  });

  return rows;
};
