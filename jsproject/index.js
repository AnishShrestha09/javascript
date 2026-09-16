let todos = [
    {
        id: Date.now(),
        text: "playingkirtan",
        iscompleted: false
    },
    {
        id: Date.now(),
        text: "shyamashyam",
        iscompleted: false
    }
];

const form = document.getElementById('todo-form');
const todo_input = document.getElementById('todo_input');
const todolist = document.querySelector("#todolist");


form.addEventListener("submit", (e) => {

    e.preventDefault();

    let todo_input_value = todo_input.value;

    let todonext = {
        id: Date.now(),
        text: todo_input_value,
        iscompleted: false
    };

    todos.push(todonext);

    addtodo(todonext);
});


function render() {

    todos.forEach((todo) => {
        addtodo(todo);
    });

}


render();


function addtodo(value) {

    const li = document.createElement('li');

    li.className = "flex gap-3 border border-black rounded-md p-2.5 mt-2";

    li.innerHTML = `
        <input data-id="${value.id}" type="checkbox">

        <p class="flex-1">${value.text}</p>

        <div class="flex gap-2">

            <button data-id="${value.id}" data-action="edit">
                edit
            </button>

            <button data-id="${value.id}" data-action="delete">
                delete
            </button>

        </div>
    `;

    todolist.append(li);
}




todolist.addEventListener('click', (e) => {


    if (e.target.tagName === "BUTTON") {
        const btn = e.target
        const action = btn.dataset.action;
        const id = Number(btn.dataset.id);

        if (action == "edit") {
            console.log("editing...")
        }

        if (action == "delete") {


            todos = todos.filter((todo) => {
                if (todo.id !== id) {
                    return todo;
                }

               
            })
            btn.closest('li').remove()
        }

    }
})
