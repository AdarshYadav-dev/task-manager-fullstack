# Task Manager – Full-Stack CRUD App

> A minimal yet production-ready **Node.js + Express + MongoDB Atlas** backend with plain **HTML/CSS/JS** frontend that demonstrates end-to-end CRUD operations, RESTful API design, and clean project structure — perfect for junior-level interviews.

---

##  Tech Stack
| Layer     | Tech                     |
|-----------|--------------------------|
| Backend   | Node.js, Express, Mongoose |
| Database  | MongoDB Atlas            |
| Frontend  | Vanilla HTML/CSS/JS      |
| Dev Tool  | Nodemon                  |

---

##  Quick Start (Local)

### 1. Clone & Enter

git clone https://github.com/AdarshYadav-dev/task-manager-fullstack.git
cd task-manager-fullstack

2. Backend Setup

cd Backend
npm install
# Fill .env with your Atlas URI & port
cp .env.example .env
npm start

Server starts on http://localhost:8080

---

3. Open App
   
cd Backend
npm install
# Fill .env with your Atlas URI & port
cp .env.example .env
npm start

---

Project Structure

task-manager-fullstack/
├── Backend/
│   ├── Controllers/TaskController.js
│   ├── Models/
│   │   ├── db.js
│   │   └── TaskModel.js
│   ├── Routes/TaskRouter.js
│   ├── index.js
│   └── .env
├── Frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md

---

API Endpoints

| Method | Endpoint   | Description      |
| ------ | ---------- | ---------------- |
| GET    | /tasks     | Fetch all tasks  |
| POST   | /tasks     | Create new task  |
| PUT    | /tasks/:id | Update task name |
| DELETE | /tasks/:id | Delete task      |

---

Test via Postman
1. Import base URL: http://localhost:8080
2. Example body for POST /tasks:

Data In Json Format !!
{ "taskName": "Finish README", "isDone": false }




