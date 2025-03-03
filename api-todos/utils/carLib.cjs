// ✅ Car Data Model
// { "model": "Corolla", "color": "Red", "age": 3 }

let carArray = [];
let nextId = 1;

// ✅ Get all cars
const getAll = () => carArray;

// ✅ Add a new car
const addOne = (model, color, age) => {
    if (!model || !color || !age) return false;

    const newCar = { id: nextId++, model, color, age };
    carArray.push(newCar);
    return newCar;
};

// ✅ Find a car by ID
const findById = (id) => carArray.find(car => car.id === Number(id)) || false;

// ✅ Update a car by ID
const updateOneById = (id, updatedData) => {
    const car = findById(id);
    if (!car) return false;

    Object.keys(updatedData).forEach((key) => {
        if (car[key] !== undefined) {
            car[key] = updatedData[key];
        }
    });

    return car;
};

// ✅ Delete a car by ID
const deleteOneById = (id) => {
    const carIndex = carArray.findIndex(car => car.id === Number(id));
    if (carIndex === -1) return false;

    carArray.splice(carIndex, 1);
    return true;
};

// ✅ Self-test when running file directly
if (require.main === module) {
    console.log("Adding cars...");
    console.log(addOne("Corolla", "Red", 3));
    console.log(addOne("Civic", "Blue", 2));

    console.log("\nAll cars:", getAll());
    console.log("Find car by ID (1):", findById(1));

    console.log("\nUpdating car ID 1...");
    console.log(updateOneById(1, { age: 4, color: "Black" }));
    console.log("Find car after update:", findById(1));

    console.log("\nDeleting car ID 1...");
    console.log(deleteOneById(1));
    console.log("Find car after deletion:", findById(1));
}

// ✅ Exporting module
module.exports = { getAll, addOne, findById, updateOneById, deleteOneById };
