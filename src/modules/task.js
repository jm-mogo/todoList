export default class task {
    constructor(title, priority, description = "") {
        this.title = title;
        this.priority = priority;
        this.description = description;
        this.checked = false
    }

    setDescription(description) {
        this.description = description;
    }

    setPriority(priority) {
        this.priority = priority;
    }
}