import { MongoClient } from "mongodb";

const connectionString = process.env.CONN_STRING || "";
const dbName = process.env.DB_NAME || "bookshelf";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db(dbName);

export default db;