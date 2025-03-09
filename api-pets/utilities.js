/* The data model for pet is:
{
  "name": "Buddy",
  "species": "Dog",
  "age": 1,
  "color": "Brown",
  "weight": 2
}
*/
let petArray = [];
let nextId = 1;


const getAll = () => petArray;


const addOne = (name, species, age, color, weight) => {
  if (!name || !species || !age || !color || !weight) {
    return false; // Missing data
  }

  const newPet = { id: nextId++, name, species, age, color, weight };
  petArray.push(newPet);
  return newPet;
};

const findById = (id) => petArray.find((pet) => pet.id == id) || false;


const updateOneById = (id, updatedData) => {
  const pet = findById(id);
  if (!pet) return false;

 
  Object.keys(updatedData).forEach((key) => {
    if (pet[key] !== undefined) {
      pet[key] = updatedData[key];
    }
  });

  return pet;
};


const deleteOneById = (id) => {
  const petIndex = petArray.findIndex((pet) => pet.id == id);
  if (petIndex === -1) return false;

  petArray.splice(petIndex, 1); // Remove pet
  return true;
};


if (require.main === module) {
  console.log("Adding pets...");
  console.log(addOne("Buddy", "Dog", 3, "Brown", 20));
  console.log(addOne("Mittens", "Cat", 2, "Black", 10));

  console.log("\nAll pets:", getAll());
  console.log("Find pet by ID (1):", findById(1));

  console.log("\nUpdating pet ID 1...");
  console.log(updateOneById(1, { age: 4, weight: 22 }));
  console.log("Find pet after update:", findById(1));

  console.log("\nDeleting pet ID 1...");
  console.log(deleteOneById(1));
  console.log("Find pet after deletion:", findById(1));
}


module.exports = { getAll, addOne, findById, updateOneById, deleteOneById };
