import { pool } from "./pool.js";

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(text, username) {
  await pool.query(
    "INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)",
    [text, username, new Date().toISOString()]
  );
}

export { getMessages, insertMessage };
