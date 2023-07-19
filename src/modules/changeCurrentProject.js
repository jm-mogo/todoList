import { projectsManager } from "..";
import displayTasks from "../ui/displayTasks"

export default function changeCurrentProject() {
    projectsManager.setId(this.id)
    closeProjectMenu()
    displayTasks(projectsManager.getCurrentProject().getTasks(), projectsManager.getCurrentProject().name)
}

function closeProjectMenu() {
    const menu = document.getElementById("menuCheck")
    menu.checked = false
}