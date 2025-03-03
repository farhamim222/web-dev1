/*const express = require("express");
const app = express();
 
const {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("./todoHandlers"); // 'todoHandlers.js' contains the route handlers

// Middleware to parse JSON
app.use(express.json());

// ROUTES

// GET /todos
app.get("/todos", getAllTodos);

// POST /todos
app.post("/todos", createTodo);

// GET /todos/:todoId
app.get("/todos/:todoId", getTodoById);

// PUT /todos/:todoId
app.put("/todos/:todoId", updateTodo);

// DELETE /todos/:todoId
app.delete("/todos/:todoId", deleteTodo);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/

const express = require("express");
const todoHandlers = require("./todoHandlers");

const app = express();
app.use(express.json()); // Middleware for parsing JSON

// Routes
app.get("/todos", todoHandlers.getAllTodos);
app.get("/todos/:todoId", todoHandlers.getTodoById);
app.post("/todos", todoHandlers.createTodo);
app.put("/todos/:todoId", todoHandlers.updateTodo);
app.delete("/todos/:todoId", todoHandlers.deleteTodo);

// Start Server
const PORT = 4000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

