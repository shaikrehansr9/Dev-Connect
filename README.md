# 📘 DevConnect - Developer Social Media Platform

DevConnect is a full-stack social media platform built using the **MERN stack** (MongoDB, Express, React, Node.js). It allows developers to connect, share posts with media, and interact in a professional tech-based environment.

---

## 🚀 Project Overview

* **Name**: DevConnect
* **Purpose**: A minimal yet scalable platform where users can:

  * Register/Login
  * Create posts with title, description, media
  * View feed in reverse chronological order
  * Explore upcoming features like comments, profiles

---

## 🔧 Technologies Used

### 💻 Frontend:

* **React.js**: Component-based UI
* **React Router**: Navigation between pages
* **Axios**: HTTP requests to backend APIs
* **Tailwind CSS**: Modern utility-first styling

### 🌐 Backend:

* **Node.js**: JavaScript runtime
* **Express.js**: Server-side routing
* **MongoDB Atlas**: Cloud NoSQL database
* **Mongoose**: ODM for MongoDB

---

## 🧱 Project Structure

### 📁 Backend (devconnect-backend)

```
├── server.js             // Entry point for Express server
├── Routes/
│   ├── authRoutes.js     // Routes for register/login
│   └── postRoutes.js     // Routes for getting and creating posts
├── Controllers/
│   ├── authController.js // Logic for user registration/login
│   └── postController.js // Logic for creating/fetching posts
├── Models/
│   ├── User.js           // Mongoose schema for User
│   └── Post.js           // Mongoose schema for Post
```

### 📁 Frontend (devconnect-frontend)

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          // Top navigation bar
│   │   ├── PostCard.jsx        // Card to display each post
│   │   └── CommentSection.jsx  // [Coming soon]
│   ├── pages/
│   │   ├── Login.jsx           // Login form
│   │   ├── Register.jsx        // Registration form
│   │   ├── Feed.jsx            // Displays all posts
│   │   └── About.jsx           // About project info
│   ├── App.jsx                 // Main routing logic
│   └── index.css               // Tailwind config + animations
```

---

## 🔐 Authentication Flow

1. **Register**:

   * User submits username, email, password
   * Data sent to `/api/register` route
   * User is stored in MongoDB

2. **Login**:

   * User submits email & password
   * Backend verifies credentials via `/api/login`
   * If valid, a dummy token (like `demon_token`) is stored in `localStorage`
   * Navbar conditionally renders based on token

---

## 📝 Posting Content

* Users create posts by submitting:

  * Title
  * Description
  * Media URL (image/video)
* Submitted via POST `/api/posts`
* Saved in MongoDB with timestamp
* Displayed in descending order on feed

### 🧾 Post Schema:

```js
const postSchema = new mongoose.Schema({
  user: String,
  title: String,
  description: String,
  media: String,
  type: String, // image/video/text
}, { timestamps: true });
```

---

## 📄 Frontend Concepts

### 🧭 Navigation

* `react-router-dom` used for navigating:

  * `/` → Feed
  * `/login` → Login form
  * `/register` → Register form
  * `/about` → Project info

### 🎨 Styling

* Tailwind CSS classes used for all styles
* Theme colors: `blue` gradient + `amber` accents
* Responsive & clean layout
* Animation utilities added via custom `@keyframes`

### 🧠 State Management

* React `useState` for local control (e.g., toggling login status)
* `localStorage` used for token-based session simulation

---

## 🛠 Backend Concepts

### 📦 Express Middleware

* `express.json()` parses JSON bodies
* `cors()` enables frontend-backend communication

### 🧪 Routes

```js
// authRoutes.js
router.post('/api/register', register);
router.post('/api/login', login);

// postRoutes.js
router.get('/api/posts', getPosts);
router.post('/api/posts', createPosts);
```

### 🗂 Controllers

* `authController.js` handles registration/login logic
* `postController.js` handles fetching/creating posts

---

## 💬 Upcoming Features

* Comment section with replies
* Profile page showing user’s posts
* Likes and media previews
* Real-time notification system

---

## 👨‍💻 Author

**Shaik Rehan**

> "This project was built to learn full-stack MERN development, including REST APIs, UI/UX with Tailwind, authentication logic, and building clean real-world applications."

---

## 🧠 Learning Outcomes

* ✅ Full-stack project structure
* ✅ REST API creation and calling via Axios
* ✅ Authentication & conditional rendering
* ✅ Tailwind CSS styling & responsiveness
* ✅ MongoDB schema modeling

---

## 📌 To Run This Project

### 🔹 Backend

```bash
cd devconnect-backend
npm install
node server.js
```

### 🔹 Frontend

```bash
cd devconnect-frontend
npm install
npm start
```

Make sure `.env` in backend has:

```
PORT=5000
MONGO_URL=your_mongo_connection_url
```

---

## ✅ Conclusion

DevConnect is not just a project — it’s a full-stack learning journey that mirrors the real-world development workflow of scalable, social-based platforms.

---
