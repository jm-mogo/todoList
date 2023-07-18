function createTaskDiv(task) {
    let div = document.createElement("div");
    div.classList.add("task");

    div.innerText = task;
    return div;
}

export default function printTasks(tasks) {
    const todoList = document.getElementById("todo-list");

    todoList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        todoList.appendChild(createTaskDiv(tasks[i].title));
    }
} 