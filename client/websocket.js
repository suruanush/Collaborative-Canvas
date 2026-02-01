import { drawStroke, redrawAll } from "./canvas.js";

export const socket = io();

socket.on("init", (data) => {
  redrawAll(data.strokes);
});

socket.on("stroke", (stroke) => drawStroke(stroke));

socket.on("sync", (strokes) => redrawAll(strokes));

socket.on("cursor", ({ userId, pos }) => {
  const user = users[userId];
  if (!user) return;
  drawCursor(pos.x, pos.y, user.color);
});

//track users
export let users = {};
socket.on("init", (data) => {
  users = data.users;
});

socket.on("user-joined", (user) => {
  users[user.id] = user;
});

socket.on("user-left", (id) => {
  delete users[id];
});
