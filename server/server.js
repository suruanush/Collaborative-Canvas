const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const room = require("./rooms");

app.use(express.static("client"));

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  //Assign color to user
  room.users[socket.id] = { id: socket.id, color: randomColor() };

  //current strokes ans users to user
  socket.emit("init", {
    strokes: room.state.getAllStrokes(),
    users: room.users
  });

  //about new user
  socket.broadcast.emit("user-joined", room.users[socket.id]);

  
  socket.on("stroke", (stroke) => {
    room.state.addStroke(stroke);
    socket.broadcast.emit("stroke", stroke);
  });

  //cursor movement
  socket.on("cursor", (pos) => {
    socket.broadcast.emit("cursor", { userId: socket.id, pos });
  });

  // Undo
  socket.on("undo", () => {
    room.state.undo();
    io.emit("sync", room.state.getAllStrokes());
  });

  // Redo
  socket.on("redo", () => {
    room.state.redo();
    io.emit("sync", room.state.getAllStrokes());
  });

  //Disconnect
  socket.on("disconnect", () => {
    delete room.users[socket.id];
    socket.broadcast.emit("user-left", socket.id);
  });
});

function randomColor() {
  return `hsl(${Math.random() * 360}, 80%, 60%)`;
}

//server
http.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
