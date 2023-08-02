import changeCheckedTask from "../modules/changeCheckedTask";
import deleteTask from "../modules/deleteTask.js"

const title = document.getElementById("project-title");
const tasksList = document.getElementById("tasksList");

function createPriorityDiv(task) {
    let div = document.createElement("div");
    div.classList.add("priority");
    div.classList.add(`priority-${task.priority}`);
    return div;
}

function createCheckbox(task, id) {
    let label = document.createElement("label");

    label.setAttribute("id", id);
    label.setAttribute("for", `checkbox-${id}`);
    label.classList.add("input-task-checkbox");

    label.innerHTML = `<input type="checkbox" ${
        task.checked ? "checked" : ""
    } id="checkbox-${id}">`;

    label.addEventListener("click", changeCheckedTask);
    return label;
}

function createTaskTitle(task) {
    let div = document.createElement("div");

    div.classList.add("task-title");
    div.textContent = task.title;

    return div;
}

function createTaskDueDate(task) {
    let div = document.createElement("div");
    div.classList.add("task-dueDate");
    div.textContent = task.dueDate;

    return div;
}

function createDeleteButton(id) {
    let button = document.createElement("button");

    button.textContent = "delete"

    button.addEventListener("click", () => {
        deleteTask(id)
    })

    return button;
}

function createTaskDiv(task, id) {
    let div = document.createElement("div");
    div.classList.add("task");

    div.appendChild(createPriorityDiv(task));
    div.appendChild(createCheckbox(task, id));
    div.appendChild(createTaskTitle(task));
    div.appendChild(createTaskDueDate(task));
    div.appendChild(createDeleteButton(id));

    if (task.checked) {
        div.classList.add("checked-task");
    }

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
        tasksList.appendChild(createTaskDiv(tasks[i], i));
    }
}
