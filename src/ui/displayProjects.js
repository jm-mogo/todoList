import changeCurrentProject from "../modules/changeCurrentProject"

function createProjectButton(project, index) {
    let projectButton = document.createElement("button")
    projectButton.textContent = project.name
    projectButton.setAttribute("id", index)
    
    projectButton.addEventListener("click", changeCurrentProject)

    return projectButton
}

export default function printProjects(projects) {
    const projectSection = document.getElementById("projects")

    for (let i = 0; i < projects.length; i++) {
        projectSection.appendChild(createProjectButton(projects[i], i))
    }
}