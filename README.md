# 🎮 GAMER RING

Gamer Ring is a modern full-stack gaming platform where users can browse, explore, and discover games for different platforms such as **PC, PS3, PS4, and PS5**.

The platform is built as a **monorepo** with both frontend and backend in a single repository, providing a smooth development and deployment workflow.

It features a responsive UI, secure authentication, and a scalable backend API for managing game data and user interactions.

---

## 🚀 Live Demo

- 🌐 Frontend: https://gamers-ring-42hd.vercel.app

---

## 📁 Project Structure

```bash
GamerRing/
├── frontend/      # React frontend application
├── backend/       # Node.js + Express backend API
└── README.md
```

---

## ✨ Features

- 🎮 Browse and explore games by category and platform
- 🔍 Search and filter games easily
- 👤 User authentication (JWT-based login system)
- 📦 Backend API for managing game data
- 📱 Fully responsive design (mobile + desktop)
- ⚡ Fast single-page application experience
- 🧠 Clean and scalable architecture

---

## 🛠 Tech Stack

### Frontend

- React.js
- React Router
- Axios
- Context API / State Management
- Tailwind CSS / CSS3

### Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- bcrypt.js
- dotenv

---

## ⚙️ Installation

### 1. Clone repository

```bash
git clone https://github.com/your-username/GamerRing.git
cd GamerRing
```

---

### 2. Install dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

---

### 3. Environment Variables

Create a `.env` file inside the **backend** folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4. Run the project

#### Start Backend

```bash
cd backend
npm run dev
```

#### Start Frontend

```bash
cd frontend
npm start
```

---

## 🌐 Deployment

- **Frontend:** Vercel / Netlify
- **Backend:** Render / Railway / Heroku
- **Database:** MongoDB Atlas

---

## 📸 Screenshots

Add screenshots here to improve presentation:

- Home page
- Game listing page
- Game details page
- Login / Register page

---

## 🚀 Future Improvements

- 🎮 Multiplayer gaming features
- 💬 Real-time chat system (Socket.io)
- 🏆 Leaderboards system
- 🔔 Notifications system
- 📊 Admin dashboard analytics
- 📱 Mobile app version

---

## 👨‍💻 Author

Built by **Nathaniel Owusu**

---

## ⭐ Notes

- Never commit `.env` files
- Ensure correct API URLs in production
- This is a monorepo (frontend + backend in one repo)
- Keep backend and frontend deployed separately

---
