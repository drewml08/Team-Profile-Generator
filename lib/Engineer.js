const inquirer = require('inquirer');

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor() {
        super();
        this.github = "";
    }

    set (data){
        super.set(data);
        this.github = data.github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

    prompt() {
        const questions = [
            {
                type: 'input',
                message: 'github username?',
                name: 'github_name', 
            },
        ];
        var p = new Promise( (resolve, reject) => {
            super.prompt().then( () => {
                inquirer.prompt(questions).then((response) => {
                    this.github = response.github_name;
                    resolve();
                });
            });    
        });
        return p;
    }
}

module.exports = Engineer;