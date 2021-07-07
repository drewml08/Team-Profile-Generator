const inquirer = require('inquirer');

const Employee = require("./Employee");

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

    prompt() {
        super.prompt();
        const questions = [
            {
                type: 'input',
                message: 'github username?',
                name: 'github_name', 
            },
        ];
        inquirer.prompt(questions).then((response) => {
            this.github = response.github_name;
        });
    }
}

module.exports = Engineer;