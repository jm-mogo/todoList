import { projectsManager } from "..";
import displayTasks from "../ui/displayTasks.js";
import { closeNav } from "../ui/displayAddTaskMenu.js";

export default function addNewTask() {
    const project = projectsManager.getCurrentProject();
    const taskName = document.getElementById("task-name");
    const taskPriority = document.getElementById("priority");
    const taskDescription = document.getElementById("description");
    const taskDate = document.getElementById("due-date")

    project.addTask(taskName.value, taskPriority.value, taskDescription.value, taskDate.value);

    console.table(project)
    
    displayTasks(project.getTasks(), project.name);
    closeNav();
}

document
    .getElementById("add-task-button")
    .addEventListener("click", addNewTask);
