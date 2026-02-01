class StateManager {
  constructor() {
    this.strokes = [];
    this.redoStack = [];
  }

  addStroke(stroke) {
    this.strokes.push(stroke);
    this.redoStack = [];
  }

  undo() {
    if (this.strokes.length === 0) return;
    this.redoStack.push(this.strokes.pop());
  }

  redo() {
    if (this.redoStack.length === 0) return;
    this.strokes.push(this.redoStack.pop());
  }

  getAllStrokes() {
    return this.strokes;
  }
}

module.exports = StateManager;
