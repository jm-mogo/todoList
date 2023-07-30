import "./style.scss";
import Project from "./modules/Project.js";
import addNewTask from "./modules/addNewTaskToProject";
import displayTasks from "./ui/displayTasks.js";
import displayProjects from "./ui/displayProjects.js";
import ProjectsManager from "./modules/ProjectsManager";
import addNewProject from "./modules/addNewProject";

const work = new Project("Work");
const home = new Project("Home");
const school = new Project("School");

export const projectsManager = new ProjectsManager();

projectsManager.addNewProject(work);
projectsManager.addNewProject(home);
projectsManager.addNewProject(school);

displayProjects(projectsManager.getProjects());

displayTasks(
    projectsManager.getCurrentProject().getTasks(),
    projectsManager.getCurrentProject().name
);
