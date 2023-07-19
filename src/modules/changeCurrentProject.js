import { projectsManager } from "..";
import displayTasks from "../ui/displayTasks"

export default function changeCurrentProject() {
    projectsManager.setId(this.id)
    displayTasks(projectsManager.getCurrentProject().getTasks(), projectsManager.getCurrentProject().name)
}