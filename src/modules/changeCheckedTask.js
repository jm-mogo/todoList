import { projectsManager } from "..";
import displayTasks from "../ui/displayTasks.js";

export default function changeCheckedTask() {
    let project = projectsManager.getCurrentProject();
    let tasks = project.getTasks();
    let task = tasks[this.id];

    task.checked = task.checked ? false : true;

    displayTasks(tasks, project.name)
}
