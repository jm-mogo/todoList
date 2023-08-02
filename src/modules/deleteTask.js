import { projectsManager } from "..";
import displayTasks from "../ui/displayTasks.js"

export default function deleteTask(id) {
    let project = projectsManager.getCurrentProject();

    let tasks = project.getTasks();

    tasks.splice(id, 1);

    displayTasks(tasks, project.name)
}
