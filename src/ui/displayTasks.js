const title = document.getElementById("project-title");
const tasksList = document.getElementById("tasksList");

function clickableDiv() {
    console.log("click");
}

function createPriorityDiv(task) {
    let div = document.createElement("div");
    div.classList.add("priority");
    div.classList.add(`priority-${task.priority}`);
    div.addEventListener("click", clickableDiv);
    return div;
}

function createTaskTitle(task) {
    let div = document.createElement("div");

    div.classList.add("task-title")
    div.textContent = task.title;

    return div;
}

function createTaskDiv(task) {
    let div = document.createElement("div");
    div.classList.add("task");

    div.appendChild(createPriorityDiv(task));
    div.appendChild(createTaskTitle(task));
    return div;
}

function printProjectName(projectName) {
    title.textContent = projectName;
}

export default function printTasks(tasks, projectName) {
    printProjectName(projectName);
    tasksList.innerHTML = "";
    if (tasks.length < 1) {
        return;
    }
    for (let i = 0; i < tasks.length; i++) {
        tasksList.appendChild(createTaskDiv(tasks[i]));
    }
}
