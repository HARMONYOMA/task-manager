# 🧠 Task Manager App

![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-4.x-lightgrey?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green?logo=mongodb)
![HTML5](https://img.shields.io/badge/HTML-Frontend-orange?logo=html5)
![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-blue?logo=netlify)
![Render](https://img.shields.io/badge/Backend_on-Render-purple?logo=render)
![License](https://img.shields.io/badge/License-MIT-blue)

A **simple and elegant full-stack Task Manager App** built with **HTML, CSS, and JavaScript** for the frontend and **Node.js + Express + SQLite** for the backend.  
Users can **create, view, and delete tasks** with smooth API integration.

---

## 🚀 Live Demo

- **Frontend (Netlify):** [https://harmony-task-manager.netlify.app/](https://harmony-task-manager.netlify.app/)  
- **Backend (Render):** [https://task-manager-iatz.onrender.com/](https://https://task-manager-iatz.onrender.com/)

---

## 🧩 Features

✅ Add new tasks easily  
✅ View all tasks in real time  
✅ Delete tasks instantly  
✅ RESTful API architecture  
✅ Responsive, lightweight UI  
✅ Deployed for free (Render + Netlify combo 💪)

---

## 🏗️ Tech Stack

| Layer | Technology | Description |
|-------|-------------|--------------|
| **Frontend** | HTML, CSS, JavaScript | Handles the UI and API requests |
| **Backend** | Node.js + Express | API routes and server logic |
| **Database** | SQLite | Lightweight local database |
| **Hosting** | Netlify (frontend), Render (backend) | Free-tier cloud deployment |
| **Version Control** | Git + GitHub | Source code management |

---

## ⚙️ Local Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/HARMONYOMA/task-manager.git
cd task-manager
```
---

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```
Start the backend:
```bash
npm start
```
Visit: http://localhost:4000

If you see “Backend is running 🚀”, everything works!

---
### 3️⃣ Frontend Setup
You can open the **frontend/index.html** directly in your browser or use a local server:
```bash
cd ../frontend
```
---
### 4️⃣ Deploy Your Project
🟣 **Deploy Backend on Render**

- Push your backend folder to GitHub.
- Visit Render.com.
- Create a new Web Service → connect your repo.
- Add environment variable:
```ini
PORT=4000
```
- Deploy 🚀
Your Render URL will look like:
https://task-manager-backend.onrender.com



 🟢 **Deploy Frontend on Netlify**

- Push your frontend folder to GitHub.
- Go to Netlify.com.
- Create a New Site from Git.
- Connect your repo.
- In app.js, set:
```js
const API_URL = "https://task-manager-backend.onrender.com/api/tasks";
```
- Deploy ✅
Your Netlify URL will look like:
https://task-manager-frontend.netlify.app

---
### 🧠 API Endpoints
| Method     | Endpoint         | Description       |
| ---------- | ---------------- | ----------------- |
| **GET**    | `/api/tasks`     | Get all tasks     |
| **POST**   | `/api/tasks`     | Create a new task |
| **DELETE** | `/api/tasks/:id` | Delete a task     |

---
### 📁 Folder Structure
```
task-manager/
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── db.js
│   ├── server.js
│   └── .env
│
└── frontend/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── app.js
    └── index.html
```

---
### 👩‍💻 Author
👋 Anigbogu Paschaline

💼 [LinkedIn](www.linkedin.com/in/chioma-anigbogu)

📝 [Medium](https://medium.com/@anigbogup)

🐙 [GitHub](https://github.com/HARMONYOMA)

### 🪪 License
This project is licensed under the MIT License — you’re free to use, modify, and share it.

---

### ⭐ Support
If you like this project, please ⭐ Star this repo — it motivates me to build more awesome apps like this!
