import { projectsManager } from "..";
import task from "../modules/task";

const taskName = document.getElementById("task-name");
const taskPriority = document.getElementById("priority");
const taskDescription = document.getElementById("description");

function checkProjectAvailable() {
    let projects = projectsManager.getProjects();

    return projects.length === 0 ? false : true;
}

function cleanInputAreas() {
    taskName.value = "";
    taskDescription.value = "";
    taskPriority.selectedIndex = 0;
}

function openNav() {
    if (checkProjectAvailable()) {
        document.getElementById("myNav").style.height = "100%";
    } else {
        alert("Add a project first");
    }
}

/* Close when someone clicks on the "x" symbol inside the overlay */
export function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    cleanInputAreas();
}

document.getElementById("new-task-button").addEventListener("click", openNav);
document.getElementById("closebtn").addEventListener("click", closeNav);
