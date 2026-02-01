This application is a real-time collaborative whiteboard where multiple users can draw simultaneously on a shared canvas.
It uses a Client–Server–Broadcast architecture built on Node.js and Socket.io to ensure low-latency synchronization and consistent global state across all connected users.
The system is intentionally designed without any drawing libraries and relies entirely on the raw HTML5 Canvas API.

1. Data Flow Diagram

User A draws on canvas
↓
Client captures pointer events
↓
Drawing data sent via WebSocket
↓
Server stores stroke in history
↓
Server broadcasts stroke
↓
All clients render stroke in real time


2. WebSocket Protocol

Message Formats
Stroke
{
  "id": "stroke-id",
  "userId": "user-id",
  "tool": "brush",
  "color": "#000000",
  "width": 4,
  "points": [{ "x": 10, "y": 20 }, { "x": 15, "y": 25 }]
}

Cursor
{ "userId": "user-id", "x": 300, "y": 200 } 

Events
Event	Direction	Purpose
init	Server → Client	Send history & users
stroke	Client → Server	Broadcast drawing
cursor	Client → Server	Share cursor position
undo	Client → Server	Global undo
redo	Client → Server	Global redo
user-left	Server → Client	Cleanup user

3. Undo / Redo Strategy

Server maintains a global stroke history stack
Undo removes the last stroke from history
Redo restores the removed stroke
Canvas is cleared and history is replayed
Any user can undo any other user’s drawing

4. Performance Decisions

Drawing uses path segments, not pixels
Local drawing happens immediately 
Canvas is only fully redrawn during undo/redo

5. Conflict Handling

No canvas locking is used
Each stroke is treated as an atomic action
Server orders strokes by arrival time
Overlapping drawings are rendered naturally

Architecture Summary

Pattern: Client–Server–Broadcast
Rendering: Client-side Canvas API
State: Server-managed global history
Sync: WebSockets (Socket.io)
