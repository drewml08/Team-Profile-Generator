const inquirer = require('inquirer');

class Employee {
    constructor(){
        this.name = "";
        this.id = "";
        this.email = "";
    }

    set (data){
        this.name = data.name;
        this.id = data.id;
        this.email = data.email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

    prompt() {
        const questions = [
            {
                type: 'input',
                message: 'Employee name?',
                name: 'name', 
            },

            {
                type: 'input',
                message: 'Employee ID?',
                name: 'id', 
            },

            {
                type: 'input',
                message: 'Employee email?',
                name: 'email', 
            }
        ];
        var p = new Promise( (resolve, reject) => {
            inquirer.prompt(questions).then((response) => {
                this.name = response.name;
                this.id = response.id;
                this.email = response.email;
                resolve();
            });
            
        }); 
        return p;
    }
}

module.exports = Employee;