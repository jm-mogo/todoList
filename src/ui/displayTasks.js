const title = document.getElementById("project-title");
const tasksList = document.getElementById("tasksList");

function createTaskDiv(task) {
    let div = document.createElement("div");
    div.classList.add("task");
    div.classList.add(`priority-${task.priority}`)
    div.innerText = task.title;
    return div;
}

function printProjectName(projectName) {
    title.textContent = projectName
}

export default function printTasks(tasks, projectName) {
    printProjectName(projectName)
    tasksList.innerHTML = "";
    if (tasks.length < 1) {
        return
    }
    for (let i = 0; i < tasks.length; i++) {
        tasksList.appendChild(createTaskDiv(tasks[i]));
    }

} 