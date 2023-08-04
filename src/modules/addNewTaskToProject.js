import { projectsManager } from "..";
import displayTasks from "../ui/displayTasks.js";
import { closeNav } from "../ui/displayAddTaskMenu.js";
import checkInputValue from "./checkInputValue";

export default function addNewTask() {
    const project = projectsManager.getCurrentProject();
    const taskName = document.getElementById("task-name");
    const taskPriority = document.getElementById("priority");
    const taskDescription = document.getElementById("description");
    const taskDate = document.getElementById("due-date");

    if (checkInputValue(taskName.value)) {
        project.addTask(
            taskName.value,
            taskPriority.value,
            taskDescription.value,
            taskDate.value
        );

        displayTasks(project.getTasks(), project.name);
        closeNav();
    } else {
        alert("Type a task name");
    }
}

document
    .getElementById("add-task-button")
    .addEventListener("click", addNewTask);
