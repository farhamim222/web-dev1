const express = require("express");
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require("../controllers/userControllers");

const router = express.Router();

router.get("/", getAllUsers); // Get all users
router.get("/:id", getUserById); // Get a user by ID
router.post("/", createUser); // Create a new user
router.put("/:id", updateUser); // Update a user by ID
router.delete("/:id", deleteUser); // Delete a user by ID

module.exports = router;
