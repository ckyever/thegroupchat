#! /usr/bin/env node

import "dotenv/config";
import { Client } from "pg";

const getCurrentUTCDateTime = () => {
  return new Date().toISOString();
};

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR(255),
  username VARCHAR(255),
  added VARCHAR(255)
);

INSERT INTO messages (text, username, added) VALUES(
'First!', 'ckyzo', '2020-07-01T23:42:13.787Z'
);

INSERT INTO messages (text, username, added) VALUES(
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non mi vitae ligula euismod auctor eu sed turpis. In sollicitudin tortor eu finibus semper.', 'Chanpan', '2025-10-01T11:02:53.787Z'
);

INSERT INTO messages (text, username, added) VALUES(
'Who asked?', 'MF DOOM', '2025-11-01T23:42:13.787Z'
);

INSERT INTO messages (text, username, added) VALUES(
'HAHAHA 😂', 'Ninajirachi', '2025-11-17T23:42:13.787Z'
);

INSERT INTO messages (text, username, added) VALUES(
'Number one. Steady hand. One day, Yakuza boss need new heart. I do operation. But mistake! Yakuza boss die! Yakuza very mad! I hide fishing boat, come to America. No English, no food, no money. Now I have house, American car and new woman.', 'Joji', '2025-11-20T00:11:13.787Z'
);

INSERT INTO messages (text, username, added) VALUES(
'sybau', 'Clairo', '${getCurrentUTCDateTime()}'
);

INSERT INTO messages (text, username, added) VALUES(
'Hello, World!', 'JPEGMAFIA', '${getCurrentUTCDateTime()}'
);

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_CONNECTION_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
