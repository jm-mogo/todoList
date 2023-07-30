import { projectsManager } from "..";
import Project from "./Project";
import displayProjects from "../ui/displayProjects.js";

const newProject = document.getElementById("add-new-project-input");

function cleanInput() {
    newProject.value = ""
}

export default function addNewProject() {
    projectsManager.addNewProject(new Project(newProject.value));
    displayProjects(projectsManager.getProjects())
    cleanInput()
}

document
    .getElementById("add-project-btn")
    .addEventListener("click", addNewProject);
