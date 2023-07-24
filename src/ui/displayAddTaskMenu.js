import task from "../modules/task";

const taskName = document.getElementById("task-name")
const taskPriority = document.getElementById("priority");
const taskDescription = document.getElementById("description");

function cleanInputAreas() {
    taskName.value = ""
    taskDescription.value = ""
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
export function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    cleanInputAreas()
}

document.getElementById("new-task-button").addEventListener('click', openNav)
document.getElementById("closebtn").addEventListener('click', closeNav)
