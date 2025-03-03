const ToDos = require("./utils/todosLib.cjs"); // Ensure correct path

// Get all todos
const getAllTodos = (req, res) => {
  const todos = ToDos.getAll();
  res.json(todos);
};

// Get a todo by ID
const getTodoById = (req, res) => {
  const todoId = req.params.todoId;
  const todo = ToDos.findById(todoId);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

// Create a new todo
const createTodo = (req, res) => {
  const { task, completed, dueDate } = req.body;
  const newTodo = ToDos.addOne(task, completed, dueDate);

  if (newTodo) {
    res.json(newTodo);
  } else {
    res.status(400).json({ message: "Invalid todo data" });
  }
};

// Update a todo by ID
const updateTodo = (req, res) => {
  const todoId = req.params.todoId;
  const { task, completed, dueDate } = req.body;

  const updatedTodo = ToDos.updateOneById(todoId, { task, completed, dueDate });

  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

// Delete a todo by ID
const deleteTodo = (req, res) => {
  const todoId = req.params.todoId;
  const isDeleted = ToDos.deleteOneById(todoId);

  if (isDeleted) {
    res.json({ message: "Todo deleted successfully" });
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

// Exporting handlers
module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
