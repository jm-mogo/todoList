import { projectsManager } from "..";

export default function changeCheckedTask() {
    let project = projectsManager.getCurrentProject();

    let tasks = project.getTasks();
    let task = tasks[this.id];
    console.log(task.checked);
    task.checked = task.checked ? false : true;
    console.log(task.checked);
}
