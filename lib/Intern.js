const inquirer = require('inquirer');

const Employee = require("./Employee");

class Intern extends Employee{
    constructor() {
        super();
        this.school = "";
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

    prompt() {
        super.prompt();
        const questions = [
            {
                type: 'input',
                message: 'At what school are you enrolled?',
                name: 'school_name', 
            },
        ];
        inquirer.prompt(questions).then((response) => {
            this.school = response.school_name;
        });
    }
}

module.exports = Intern;