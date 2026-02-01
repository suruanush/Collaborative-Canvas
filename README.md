# 🎨 Real-Time Collaborative Drawing Canvas

A real-time collaborative whiteboard where multiple users can draw simultaneously on the same canvas. The application is built using raw HTML5 Canvas, Node.js, and Socket.io, focusing on real-time synchronization, global state management, and strong canvas fundamentals.

## 🚀 Features

- Live multi-user drawing (real-time sync)
- Brush and eraser tools
- Multiple colors & adjustable stroke width
- Global undo / redo (works across all users)
- Animated ghost cursors for other users
- Online users count
- Conflict-safe drawing

## 🛠️ Tech Stack

- Frontend: HTML, CSS (Flexbox), Vanilla JavaScript (Canvas API)
- Backend: Node.js, Express
- Real-time Communication: Socket.io
- Canvas: Raw HTML5 Canvas API (no libraries) Socket.io (WebSockets)

## ⚙️ Setup Instructions
- Installation & Running the Project
- Prerequisites
- Node.js v18+ installed
- npm installed## commands
- node -v
- npm -v

 1. Clone the repository
- git clone <your-repo-url>

 2. Navigate into the project folder
- cd collaborative-canvas

 3. Install dependencies
- npm install
- npm install express
- npm install socket.io

 4. Start the server
- npm start


👥 Testing with Multiple Users

To test real-time collaboration:

- Open two or more browser windows
Visit http://localhost:3000 in each window
(You can also use incognito/private tabs)
- Start drawing in one window
- Other users will see:
- Live drawing strokes
- Moving ghost cursors
- Undo/redo changes instantly
This confirms real-time synchronization and global history management.

⏱ Time Spent on the Project

Total Time: 15–20 hours

