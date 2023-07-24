import { projectsManager } from ".."
import displayTasks from "../ui/displayTasks.js"
import { closeNav } from "../ui/displayAddTaskMenu.js";

export default function addNewTask() {
    const project = projectsManager.getCurrentProject()
    let taskName = document.getElementById("task-name")
    let taskPriority = document.getElementById("priority")
    
    project.addTask(taskName.value, taskPriority.value, "hello, im the description")

    displayTasks(project.getTasks(), project.name)
    closeNav()
}

document.getElementById('add-task-button').addEventListener("click", addNewTask)