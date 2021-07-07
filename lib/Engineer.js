class Engineer extends Employee {
    constructor() {
        super();
        this.github = "";
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}