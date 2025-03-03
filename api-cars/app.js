/*const express = require("express");
const app = express();
 
const {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} = require("./carHandlers"); // 'carHandlers.js' contains the route handlers

// Middleware to parse JSON
app.use(express.json());

// ROUTES

// GET /cars
app.get("/cars", getAllCars);

// POST /cars
app.post("/cars", createCar);

// GET /cars/:carId
app.get("/cars/:carId", getCarById);

// PUT /cars/:carId
app.put("/cars/:carId", updateCar);

// DELETE /cars/:carId
app.delete("/cars/:carId", deleteCar);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/
const express = require("express");
const carHandlers = require("./carHandlers");

const app = express();
app.use(express.json()); // Middleware for parsing JSON

// Routes
app.get("/cars", carHandlers.getAllCars);
app.get("/cars/:carId", carHandlers.getCarById);
app.post("/cars", carHandlers.createCar);
app.put("/cars/:carId", carHandlers.updateCar);
app.delete("/cars/:carId", carHandlers.deleteCar);

// Start Server
const PORT = 4000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
