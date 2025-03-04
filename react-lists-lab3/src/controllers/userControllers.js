let users = []; // Temporary in-memory storage

// Get all users
const getAllUsers = (req, res) => {
  res.json(users);
};

// Get a user by ID
const getUserById = (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// Create a new user
const createUser = (req, res) => {
  const newUser = { id: Date.now().toString(), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Update a user by ID
const updateUser = (req, res) => {
  const index = users.findIndex((u) => u.id === req.params.id);
  if (index !== -1) {
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// Delete a user by ID
const deleteUser = (req, res) => {
  users = users.filter((u) => u.id !== req.params.id);
  res.json({ message: "User deleted successfully" });
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
