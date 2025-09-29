// models/taskModel.js
const db = require("../db");

function getAllTasks(callback) {
  db.all("SELECT * FROM tasks", [], (err, rows) => callback(err, rows));
}

function addTask(title, callback) {
  db.run("INSERT INTO tasks (title) VALUES (?)", [title], function (err) {
    callback(err, { id: this.lastID, title, completed: 0 });
  });
}

function updateTask(id, completed, callback) {
  db.run(
    "UPDATE tasks SET completed = ? WHERE id = ?",
    [completed, id],
    function (err) {
      callback(err, { id, completed });
    }
  );
}

function deleteTask(id, callback) {
  db.run("DELETE FROM tasks WHERE id = ?", [id], function (err) {
    callback(err, { deletedID: id });
  });
}

module.exports = { getAllTasks, addTask, updateTask, deleteTask };
