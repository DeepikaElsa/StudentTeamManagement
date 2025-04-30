# 🧑‍💻 TeamSync – Student Team Members Management Application

---

## 📘 Project Description

TeamSync is a full-stack web application designed to manage student team members efficiently. It enables users to add, view, and manage detailed member profiles, including role, contact information, and profile images. The project is built using **React (Vite + TypeScript)** for the frontend and **Node.js + Express + MongoDB** for the backend. It provides a clean UI and seamless interaction between frontend and backend through RESTful APIs.

---

## ⚙️ Installation Steps

### 🔧 Prerequisites
- Node.js and npm installed
- MongoDB running locally (or MongoDB Atlas URI)
- Git

---

### 📁 Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file inside `backend/` and add:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/student-team-management
```

4. Run the backend server:
```bash
npm run dev     # or use: node server.js
```

---

### 💻 Frontend Setup

1. Navigate back to the root directory:
```bash
cd ..
```

2. Install frontend dependencies:
```bash
npm install
```

3. Run the frontend development server:
```bash
npm run dev
```

4. Access the frontend at: [http://localhost:5173](http://localhost:5173)

---

## 🔗 API Endpoints

| Method | Endpoint             | Description                            |
|--------|----------------------|----------------------------------------|
| POST   | `/api/members`       | Add a new team member (with image)     |
| GET    | `/api/members`       | Get all team members                   |
| GET    | `/api/members/:id`   | Get full details of a specific member  |

Uploaded images are served from:
```
http://localhost:5000/uploads/{filename}
```

---

## 🚀 How to Run the App

1. **Start MongoDB locally** (e.g., via MongoDB Compass or CLI).
2. **Start the backend:**
   ```bash
   cd backend
   npm run dev
   ```
3. **Start the frontend:**
   ```bash
   cd ..
   npm run dev
   ```
4. **Visit the application:**  
   Open [http://localhost:5173](http://localhost:5173) in your browser.
5. Use the app to:
   - Add new members
   - View all members
   - View individual member details

## 🖼️ Screenshots

### 🔹 Home Page
![Home Page](./screenshots/homepage.png)

### 🔹 Add Member Form
![Add Member](./screenshots/add-member-form.png)

### 🔹 Team Members Tab
![Team Member](./screenshots/team-member.png)


