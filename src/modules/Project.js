import Task from "./task.js";

export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = []
    }
    
    addTask(name, priority, description, dueDate) {
        this.tasks.push(new Task(name, priority, description, dueDate))
    } 

    getTasks() {
        return this.tasks
    }
}
