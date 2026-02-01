# 🎨 Real-Time Collaborative Drawing Canvas

A real-time collaborative drawing canvas for multiple users. All drawings are synchronized instantly using WebSockets, with global undo/redo, ghost cursors, and user management.

Exhibits strong knowledge of:
- HTML5 Canvas API
- Real-time WebSocket applications
- Global state synchronization
- Conflict resolution in collaborative applications

---

## 🚀 Features

### 🖌️ Drawing Tools
- Brush, Eraser
- Multiple colors
- Stroke width adjustment

### ⚡ Real-Time Collaboration
- Live synchronization as a drawing
- Instant strokes, no latency
- Optimized path drawing

### 👻 Ghost Cursors
- Real-time cursor tracking
- Smooth cursor movement
- Distinct color for each user

### 🌐 User Management
- Online user display
- Individual per-user colors
- Handling of join and leave events

### ↩️ Global Undo / Redo
- Global undo/redo functionality
- Any user can undo another's stroke
- Global history maintained on the server

---

## 🛠️ Tech Stack

### Frontend
- HTML, CSS (Flexbox)
- Vanilla JavaScript
- HTML5 Canvas API (no libraries)

### Backend
- Node.js, Express
- Socket.io (WebSockets)

## ⚙️ Setup Instructions

## commands
node -v
npm -v

npm install express
npm install socket.io

npm start
Server running at http://localhost:3000





