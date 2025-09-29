const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./db");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 👇 Add this test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// API routes
app.use("/api/tasks", require("./routes/tasks"));

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
