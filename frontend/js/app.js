// Use your deployed backend URL here 👇
const API_URL = "https://your-backend.onrender.com/api/tasks"; 

// Elements
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Fetch all tasks on load
async function fetchTasks() {
  taskList.innerHTML = "";
  try {
    const res = await fetch(API_URL);
    const tasks = await res.json();
    tasks.forEach(task => renderTask(task));
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}

// Render task to the list
function renderTask(task) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${task.title}</span>
    <button onclick="deleteTask(${task.id})">❌</button>
  `;
  taskList.appendChild(li);
}

// Add new task
taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = taskInput.value.trim();
  if (!title) return;

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    });
    const newTask = await res.json();
    renderTask(newTask);
    taskInput.value = "";
  } catch (error) {
    console.error("Error adding task:", error);
  }
});

// Delete task
async function deleteTask(id) {
  try {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchTasks(); // refresh task list
  } catch (error) {
    console.error("Error deleting task:", error);
  }
}

// Load tasks on startup
fetchTasks();
