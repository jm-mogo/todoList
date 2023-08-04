import changeCurrentProject from "../modules/changeCurrentProject";
import deleteProject from "../modules/deleteProject";

function createDeleteProjectButton(index) {
    let button = document.createElement("button");

    button.textContent = "delete";
    button.addEventListener("click", () => {
        deleteProject(index);
    });

    return button;
}

function createProjectButton(project, index) {
    let projectButton = document.createElement("div");
    projectButton.textContent = project.name;
    projectButton.setAttribute("id", index);
    projectButton.classList.add("project-button");

    projectButton.addEventListener("click", changeCurrentProject);

    return projectButton;
}

function createProject(project, index) {
    let projectSection = document.createElement("div");

    projectSection.classList.add("project-section")

    projectSection.appendChild(createProjectButton(project, index));
    projectSection.appendChild(createDeleteProjectButton(index));

    return projectSection;
}

export default function printProjects(projects) {
    const projectSection = document.getElementById("projects");

    projectSection.innerHTML = "";

    for (let i = 0; i < projects.length; i++) {
        projectSection.appendChild(createProject(projects[i], i));
    }
}
