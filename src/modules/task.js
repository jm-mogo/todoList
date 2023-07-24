export default class task {
    constructor(title, priority, description = "", date = "") {
        this.title = title;
        this.priority = priority;
        this.description = description;
        this.checked = false
        this.dueDate = date
    }

    setDescription(description) {
        this.description = description;
    }

    setPriority(priority) {
        this.priority = priority;
    }
}
