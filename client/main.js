import { canvas, drawStroke } from "./canvas.js";
import { socket } from "./websocket.js";
import { users } from "./websocket.js"; //import users

let drawing = false;
let currentStroke = null;

const tool = document.getElementById("tool");
const color = document.getElementById("color");
const size = document.getElementById("size");
const undoBtn = document.getElementById("undo");
const redoBtn = document.getElementById("redo");

// drawing start's here
canvas.addEventListener("pointerdown", (e) => {
  drawing = true;
  currentStroke = {
    tool: tool.value,
    color: color.value,
    size: Number(size.value),
    points: [{ x: e.clientX, y: e.clientY }]
  };
});

canvas.addEventListener("pointermove", (e) => {
  if (!drawing) return;

  const point = { x: e.clientX, y: e.clientY };
  currentStroke.points.push(point);

  drawStroke({
    ...currentStroke,
    points: currentStroke.points.slice(-2)
  });

  socket.emit("cursor", point);
});

canvas.addEventListener("pointerup", () => {
  drawing = false;
  socket.emit("stroke", currentStroke);
});


//undo/redo
undoBtn.onclick = () => socket.emit("undo");
redoBtn.onclick = () => socket.emit("redo");

//users count
const onlineUsersSpan = document.getElementById("online-users");

setInterval(() => {
  onlineUsersSpan.textContent =
    `Online Users: ${Object.keys(users).length}`;
}, 1000);
