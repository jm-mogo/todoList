import { projectsManager } from "..";
import displayTasks from "../ui/displayTasks"
import closeProjectMenu from "../ui/closeProjectMenu";

export default function changeCurrentProject() {
    projectsManager.setId(this.id)
    closeProjectMenu()
    displayTasks(projectsManager.getCurrentProject().getTasks(), projectsManager.getCurrentProject().name)
}

