import { projectsManager } from "..";
import Project from "./Project";
import displayProjects from "../ui/displayProjects.js";
import checkInputValue from "./checkInputValue";

const newProject = document.getElementById("add-new-project-input");

function cleanInput() {
    newProject.value = ""
}

export default function addNewProject() {
    if (checkInputValue(newProject.value)) {
        projectsManager.addNewProject(new Project(newProject.value));
        displayProjects(projectsManager.getProjects())
        cleanInput()
    } else {
        alert("Don't let it blank")
    }
}

document
    .getElementById("add-project-btn")
    .addEventListener("click", addNewProject);
