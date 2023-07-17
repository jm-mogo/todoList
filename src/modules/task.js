export default class task {
    constructor(title, description = "") {
        this.title = title;
        this.description = description;
    }

    set setDescription(description) {
        this.description = description;
    }
}
