export default class task {
    constructor(title, priority, description = "") {
        this.title = title;
        this.priority = priority
        this.description = description;
    }

    set setDescription(description) {
        this.description = description;
    }
}
