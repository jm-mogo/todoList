export default class CurrentProject {
    constructor() {
        this.id = 0
        this.projects = []
    }

    getCurrentProject() {
        return this.projects[this.id]
    }

    getProjects() {
        return this.projects
    }

    addNewProject(project) {
        this.projects.push(project)
    }

    setId(id) {
        this.id = id
    }
}