import "./style.scss";
import Project from "./modules/Project.js";
import displayTasks from "./ui/displayTasks.js";
import {closeNav} from "./ui/displayAddTaskMenu.js";

const me = new Project("Me");

displayTasks(me.getTasks());

function addNewTask() {
    let taskName = document.getElementById("task-name")
    me.addTask(taskName.value)

    displayTasks(me.getTasks())
    closeNav()
}

document.getElementById('add-task-button').addEventListener("click", addNewTask)