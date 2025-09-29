// db.js
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db = new sqlite3.Database(path.resolve(__dirname, "tasks.db"), (err) => {
  if (err) {
    console.error("Error opening database", err);
  } else {
    db.run(
      `CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        completed INTEGER DEFAULT 0
      )`
    );
    console.log("Database ready 🚀");
  }
});

module.exports = db;
