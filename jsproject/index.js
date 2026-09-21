const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const formBtn = document.querySelector("#form-btn");
const taskCount = document.querySelector("#task-count");
const completeCount = document.querySelector("#complete-count");
const cancelBtn = document.querySelector("#cancel-btn");

// Get todos from localStorage
// If nothing exists, use an empty array
let todos = JSON.parse(localStorage.getItem("todos") || "[]");

// null means: currently we are NOT editing anything
let editTodoId = null;


// ======================================================
// ADD / UPDATE TODO
// ======================================================

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoValue = todoInput.value.trim();

    // If input is empty, stop
    if (!todoValue) {
        return;
    }

    console.log({ editTodoId, todoValue });


    // ==================================================
    // EDITING EXISTING TODO
    // ==================================================

    if (editTodoId) {

        todos = todos.map((todo) => {

            if (todo.id === Number(editTodoId)) {
                return {
                    ...todo,
                    text: todoValue
                };
            }

            return todo;
        });

        // Save updated todos
        localStorage.setItem("todos", JSON.stringify(todos));

    }


    // ==================================================
    // ADDING NEW TODO
    // ==================================================

    else {

        const newTodo = {
            id: Date.now(),
            text: todoValue,
            isCompleted: false
        };

        // Add new todo to existing array
        todos.push(newTodo);

        // Save array in localStorage
        localStorage.setItem("todos", JSON.stringify(todos));
    }


    // Reset edit mode
    cancelEdit();

    // Display updated todos
    renderTodo();
});


// ======================================================
// RENDER TODOS
// ======================================================

function renderTodo() {

    // Clear old HTML
    todoList.innerHTML = "";

    // Create HTML for every todo
    todos.forEach((todo) => {

        const li = document.createElement("li");

        li.className =
            "flex gap-2 border border-slate-300 p-4 rounded-xl";

        // Store todo ID inside data-id
        li.dataset.id = todo.id;


        li.innerHTML = `
            <input 
                data-action="toggle"
                ${todo.isCompleted ? "checked" : ""}
                type="checkbox"
            >

            <p class="flex-1 ${
                todo.isCompleted
                    ? "line-through text-red-400"
                    : ""
            }">
                ${todo.text}
            </p>

            <div class="flex gap-2">

                <button
                    data-action="edit"
                    class="px-2.5 py-1 text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 rounded transition-colors cursor-pointer"
                >
                    Edit
                </button>

                <button
                    data-action="delete"
                    class="px-2.5 py-1 text-xs font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 rounded transition-colors cursor-pointer"
                >
                    Delete
                </button>

            </div>
        `;


        // Add li to todoList
        todoList.append(li);
    });


    // Update task count
    taskCount.textContent = `TASKS (${todos.length})`;


    // Count completed todos
    completeCount.textContent =
        `COMPLETED: ${
            todos.filter((todo) => todo.isCompleted).length
        }`;
}


// ======================================================
// INITIAL RENDER
// ======================================================

// When page first loads,
// show todos already stored in localStorage
renderTodo();


// ======================================================
// EVENT DELEGATION
// ======================================================

todoList.addEventListener("click", (e) => {

    // Find the closest li
    const li = e.target.closest("li");

    // Safety check
    if (!li) {
        return;
    }

    // Get todo ID
    const id = li.dataset.id;

    // Get which button/input was clicked
    const action = e.target.dataset.action;


    // ==================================================
    // DELETE
    // ==================================================

    if (action === "delete") {
        deleteTodo(id);
    }


    // ==================================================
    // EDIT
    // ==================================================

    if (action === "edit") {
        startEdit(id);
    }


    // ==================================================
    // TOGGLE COMPLETE
    // ==================================================

    if (action === "toggle") {

        todos = todos.map((todo) => {

            if (todo.id === Number(id)) {

                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                };
            }

            return todo;
        });


        // Save updated todos
        localStorage.setItem(
            "todos",
            JSON.stringify(todos)
        );


        // Re-render
        renderTodo();
    }
});


// ======================================================
// DELETE TODO
// ======================================================

function deleteTodo(id) {

    todos = todos.filter(
        (todo) => todo.id !== Number(id)
    );


    // Save updated array
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );


    // Re-render
    renderTodo();
}


// ======================================================
// START EDIT
// ======================================================

function startEdit(id) {

    // Store ID of todo being edited
    editTodoId = id;


    // Find the todo
    const currentTodo = todos.find(
        (todo) => todo.id === Number(id)
    );


    // Put old text inside input
    todoInput.value = currentTodo.text;


    // Change button text
    formBtn.textContent = "Update";


    // Change button style
    formBtn.className =
        "px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors cursor-pointer";


    // Show cancel button
    cancelBtn.classList.remove("hidden");
}


// ======================================================
// CANCEL EDIT
// ======================================================

function cancelEdit() {

    // Exit edit mode
    editTodoId = null;


    // Clear input
    todoInput.value = "";


    // Change button text back
    formBtn.textContent = "Add";


    // Change button style back
    formBtn.className =
        "px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors cursor-pointer";


    // Hide cancel button
    cancelBtn.classList.add("hidden");
}


// ======================================================
// CANCEL BUTTON EVENT
// ======================================================

cancelBtn.addEventListener("click", () => {
    cancelEdit();
});