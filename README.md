# 💬 Mini WhatsApp REST API

A modern **Mini WhatsApp-style chat application** built with **Node.js, Express.js, MongoDB, Mongoose, and EJS**.

This project demonstrates how to build a RESTful CRUD application where users can create, view, edit, and delete chat messages. It also includes a responsive and modern user interface.

---

## 📌 Project Overview

**Mini WhatsApp REST API** is a backend-focused chat application inspired by basic WhatsApp functionality.

The application allows users to:

* 💬 Create new chats
* 👀 View all chats
* ✏️ Edit existing messages
* 🗑️ Delete chats
* 🕒 Store message creation date and time
* 🗄️ Persist chat data using MongoDB
* 🎨 Interact with a modern responsive UI

The project was created to practice **Node.js, Express.js, MongoDB, Mongoose, REST APIs, CRUD operations, EJS templating, and frontend styling**.

---

## 🚀 Features

### 💬 Chat Management

* Create a new chat
* View all available chats
* Edit chat messages
* Delete chats
* Display sender and receiver information
* Display message date and time

### 🔧 Backend

* Node.js runtime
* Express.js server
* RESTful routing
* MongoDB database
* Mongoose ODM
* HTTP method override for PUT and DELETE requests

### 🎨 Frontend

* EJS templates
* Responsive design
* Modern glassmorphism-style UI
* Message cards and chat bubbles
* Responsive layout for different screen sizes
* Character counter for messages
* Delete confirmation

---

## 🛠️ Tech Stack

| Technology          | Purpose                   |
| ------------------- | ------------------------- |
| **Node.js**         | JavaScript runtime        |
| **Express.js**      | Backend web framework     |
| **MongoDB**         | Database                  |
| **Mongoose**        | MongoDB object modeling   |
| **EJS**             | Server-side templating    |
| **HTML5**           | Page structure            |
| **CSS3**            | Styling and responsive UI |
| **JavaScript**      | Client-side functionality |
| **Method-Override** | PUT/DELETE form requests  |
| **Git & GitHub**    | Version control           |

---

## 📂 Project Structure

```text
mini-whatsapp-rest-api/
│
├── models/
│   └── chat.js
│
├── public/
│   └── style.css
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/mini-whatsapp-rest-api.git
```

Move into the project directory:

```bash
cd mini-whatsapp-rest-api
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Start MongoDB

Make sure MongoDB is installed and running on your system.

The application currently connects to:

```text
mongodb://127.0.0.1:27017/whatapp
```

> You can change the database name or connection string inside `index.js`.

---

### 4. Start the Server

For normal mode:

```bash
npm start
```

Or:

```bash
node index.js
```

If you are using Nodemon:

```bash
npm run dev
```

---

### 5. Open the Application

Open your browser and visit:

```text
http://localhost:8080/chats
```

---

## 🔗 Application Routes

| Method   | Route             | Description        |
| -------- | ----------------- | ------------------ |
| `GET`    | `/chats`          | Display all chats  |
| `GET`    | `/chats/new`      | Open new chat form |
| `POST`   | `/chats`          | Create a new chat  |
| `GET`    | `/chats/:id/edit` | Open edit page     |
| `PUT`    | `/chats/:id`      | Update a chat      |
| `DELETE` | `/chats/:id`      | Delete a chat      |
| `GET`    | `/`               | Root/test route    |

---

## 🗄️ Chat Data Model

Each chat contains information similar to:

```js
{
    from: String,
    to: String,
    msg: String,
    created_at: Date
}
```

Example:

```json
{
    "from": "Sujit",
    "to": "Rahul",
    "msg": "Hello! How are you?",
    "created_at": "2026-09-28T12:30:00.000Z"
}
```

---

## 🔄 CRUD Operations

This project demonstrates the complete CRUD lifecycle.

### Create

```http
POST /chats
```

Creates a new chat message.

### Read

```http
GET /chats
```

Retrieves all chats from MongoDB.

### Update

```http
PUT /chats/:id
```

Updates an existing chat message.

### Delete

```http
DELETE /chats/:id
```

Removes a chat from MongoDB.

---

## 🧠 Concepts Practiced

Through this project, the following concepts are practiced:

* Node.js
* Express.js
* RESTful APIs
* CRUD operations
* MongoDB
* Mongoose
* EJS templating
* Express middleware
* HTTP methods
* Method Override
* Dynamic routes
* Route parameters
* Form handling
* MongoDB queries
* Asynchronous JavaScript
* Responsive CSS
* Git and GitHub

---

## 🎨 UI Preview

The application includes:

* Modern chat cards
* Glassmorphism design
* Responsive layout
* Message bubbles
* Sender/receiver information
* Edit and delete actions
* Modern new-chat form
* Modern message editor

### Screenshots

Add your project screenshots here:

```text
screenshots/
├── chats.png
├── new-chat.png
└── edit-chat.png
```

Then add them to the README:

```markdown
![Chat List](screenshots/chats.png)

![New Chat](screenshots/new-chat.png)

![Edit Chat](screenshots/edit-chat.png)
```

---

## 🔐 Environment Variables

For a production-ready version, the MongoDB connection string should be stored in an environment file.

Create:

```text
.env
```

Example:

```env
MONGO_URI=mongodb://127.0.0.1:27017/whatapp
PORT=8080
```

Then use:

```js
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);
```

Make sure `.env` is included in `.gitignore`:

```gitignore
node_modules/
.env
.DS_Store
```

**Never upload database credentials or secret keys to GitHub.**

---

## 📦 Dependencies

Main dependencies used in this project:

```text
express
mongoose
ejs
method-override
```

Install all dependencies with:

```bash
npm install
```

---

## 🔮 Future Improvements

Possible improvements for future versions:

* 🔐 User authentication
* 👤 User profiles
* 🟢 Online/offline status
* 📱 Mobile-friendly chat interface
* 🔍 Chat search
* 🖼️ Image and file sharing
* 👍 Message reactions
* 🔔 Notifications
* ⚡ Real-time messaging using Socket.IO
* 🔒 Password hashing and authentication
* ☁️ MongoDB Atlas integration
* 🚀 Deployment to a cloud platform

---

## 🎯 Learning Goal

The main goal of this project is to understand how a complete CRUD-based web application works from frontend to backend and database.

The project provides practical experience with:

```text
Frontend
   ↓
EJS + HTML + CSS + JavaScript
   ↓
Express.js
   ↓
RESTful Routes
   ↓
Mongoose
   ↓
MongoDB
```

---

## 👨‍💻 Author

**Sujit Kumar Pandit**

B.Tech Computer Science & Engineering Student

Interested in:

* Software Development
* Java
* Data Structures & Algorithms
* Full-Stack Development
* Backend Development

---

## ⭐ Support

If you found this project useful for learning, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for **educational and learning purposes**.
