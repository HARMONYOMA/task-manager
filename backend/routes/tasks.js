// routes/tasks.js
const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");

// GET all tasks
router.get("/", (req, res) => {
  Task.getAllTasks((err, tasks) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(tasks);
  });
});

// POST create task
router.post("/", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  Task.addTask(title, (err, task) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json(task);
  });
});

// PUT update task (mark completed)
router.put("/:id", (req, res) => {
  const { completed } = req.body;
  Task.updateTask(req.params.id, completed, (err, task) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(task);
  });
});

// DELETE task
router.delete("/:id", (req, res) => {
  Task.deleteTask(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

module.exports = router;
