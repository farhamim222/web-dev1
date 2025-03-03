let todosArray = [];
let nextId = 1;


const getAll = () => todosArray;


const addOne = (task, completed = false, dueDate) => {
    if (!task || !dueDate) return false;

    const newTodo = { id: nextId++, task, completed, dueDate };
    todosArray.push(newTodo);
    return newTodo;
};


const findById = (id) => todosArray.find(todo => todo.id === Number(id)) || false;


const updateOneById = (id, updatedData) => {
    const todo = findById(id);
    if (!todo) return false;

    Object.keys(updatedData).forEach((key) => {
        if (todo[key] !== undefined) {
            todo[key] = updatedData[key];
        }
    });

    return todo;
};


const deleteOneById = (id) => {
    const todoIndex = todosArray.findIndex(todo => todo.id === Number(id));
    if (todoIndex === -1) return false;

    todosArray.splice(todoIndex, 1);
    return true;
};


if (require.main === module) {
    console.log("Adding todos...");
    console.log(addOne("Buy groceries", false, "2025-08-30"));
    console.log(addOne("Complete project", true, "2025-09-10"));

    console.log("\nAll todos:", getAll());
    console.log("Find todo by ID (1):", findById(1));

    console.log("\nUpdating todo ID 1...");
    console.log(updateOneById(1, { completed: true }));
    console.log("Find todo after update:", findById(1));

    console.log("\nDeleting todo ID 1...");
    console.log(deleteOneById(1));
    console.log("Find todo after deletion:", findById(1));
}


module.exports = { getAll, addOne, findById, updateOneById, deleteOneById };
