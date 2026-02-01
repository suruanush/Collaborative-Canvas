const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

//brush or eraser
export function drawStroke(stroke) {
  ctx.save();

  ctx.globalCompositeOperation =
    stroke.tool === "eraser" ? "destination-out" : "source-over";

  ctx.strokeStyle = stroke.color;
  ctx.lineWidth = stroke.size;
  ctx.lineCap = "round";

  ctx.beginPath();
  ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
  for (let i = 1; i < stroke.points.length; i++) {
    ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
  }
  ctx.stroke();
  ctx.restore();
}

//for undo/redo 
export function redrawAll(strokes) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  strokes.forEach(drawStroke);
}

// Draw user cursor
export function drawCursor(x, y, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export { canvas, ctx };
