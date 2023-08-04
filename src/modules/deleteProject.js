import { projectsManager } from "..";
import displayProjects from "../ui/displayProjects.js"

export default function deleteProject(id) {
    let projects = projectsManager.getProjects();

    projects.splice(id, 1);

    displayProjects(projects)
}