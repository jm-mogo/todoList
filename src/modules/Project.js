import Task from "./task.js";

export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = []
    }
    
    addTask(name, priority, description) {
        this.tasks.push(new Task(name, priority, description))
    } 

    getTasks() {
        return this.tasks
    }
}
