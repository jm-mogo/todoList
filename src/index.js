import "./style.scss";
import Project from "./modules/Project.js";

const me = new Project("Me");

me.addTask("Clean");
me.addTask("work out");
me.addTask("study");
me.addTask("Do home work");
me.addTask("Chores");

function printTasks() {
    const todoList = document.getElementById("todo-list");

    todoList.innerHTML = "";
    let tasks = me.getTasks();
    for (let i = 0; i < tasks.length; i++) {
        todoList.appendChild(createTask(tasks[i].title));
    }
}

function createTask(task) {
    let div = document.createElement("div");
    div.classList.add("task");

    div.innerText = task;
    return div;
}

printTasks();

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

document.getElementById("add-task-button").addEventListener('click', openNav)
document.getElementById("closebtn").addEventListener('click', closeNav)

