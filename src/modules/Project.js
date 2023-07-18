import Task from "./task.js";

export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = []
    }
    
    addTask(name) {
        this.tasks.push(new Task(name))
    } 

    getTasks() {
        return this.tasks
    }
}
