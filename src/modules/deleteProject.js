import { projectsManager } from "..";
import displayProjects from "../ui/displayProjects.js";
import displayTasks from "../ui/displayTasks.js";

export default function deleteProject(id) {
    let projects = projectsManager.getProjects();

    if (projectsManager.id === id) {
        projectsManager.setId(0);
    }

    projects.splice(id, 1);

    displayProjects(projects);
    displayTasks(
        projectsManager.getCurrentProject().getTasks(),
        projectsManager.getCurrentProject().name
    );
}
