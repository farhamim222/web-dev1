const Car = require("./utils/carLib.cjs");  // Ensure correct path

// Get all cars
const getAllCars = (req, res) => {
  const cars = Car.getAll();
  res.json(cars);
};

// Get a car by ID
const getCarById = (req, res) => {
  const carId = req.params.carId;
  const car = Car.findById(carId);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

// Create a new car
const createCar = (req, res) => {
  const { model, color, age } = req.body;
  const newCar = Car.addOne(model, color, age);

  if (newCar) {
    res.json(newCar);
  } else {
    res.status(400).json({ message: "Invalid car data" });
  }
};

// Update a car by ID
const updateCar = (req, res) => {
  const carId = req.params.carId;
  const { model, color, age } = req.body;

  const updatedCar = Car.updateOneById(carId, { model, color, age });

  if (updatedCar) {
    res.json(updatedCar);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

// Delete a car by ID
const deleteCar = (req, res) => {
  const carId = req.params.carId;
  const isDeleted = Car.deleteOneById(carId);

  if (isDeleted) {
    res.json({ message: "Car deleted successfully" });
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

// Exporting handlers
module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
