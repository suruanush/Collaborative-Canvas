1. Introduction
This is a Real-Time Collaborative Whiteboard. The aim is for several users to draw on the same canvas simultaneously. We employ a Client-Server architecture using Socket.io to maintain consistency among all users with minimal latency.

2. System Components
There are two components to the system to ensure that the system is understood clearly:
Frontend (The View): Implemented using the HTML5 Canvas API via canvas.js. It is responsible for rendering pixels, lines, and cursor points.
Networking (The Controller): Handled by Socket.io. It is the mediator that listens for server broadcasts.

3. Communication Protocol
WebSockets enable two-way communication. Data exchange occurs via particular event listeners that ensure the canvas remains in sync:
- init: Upon connection, this event triggers the transmission of the current drawing history and the list of connected users to populate the client.
- stroke: This broadcast transmits coordinate information and styles to enable immediate path rendering.
- cursor: This is a high-rate event that broadcasts the movement of the opposing mouse cursor via x and y coordinates.
- user-left: This event cleans up by removing the user from the list to conserve memory.

## Architecture Summary
The system architecture is Client-Server-Broadcast using Socket.io. The architecture distinguishes the Networking Controller (manages events) from the Frontend View (Canvas API). The system employs Hash Maps to manage users and WebSockets for small updates to achieve fast canvas synchronization.