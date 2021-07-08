const inquirer = require('inquirer');

const Employee = require("./Employee");

class Manager extends Employee {
    constructor (){
        super ();
        this.officeNumber = "";
    }

    set (data){
        super.set(data);
        this.officeNumber = data.officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }

    prompt() {
        const questions = [
            {
                type: 'input',
                message: 'Office number?',
                name: 'number', 
            }
        ];    
        var p = new Promise( (resolve, reject) => {
            super.prompt().then( () => {
                inquirer.prompt(questions).then((response) => {
                    this.number = response.number;
                    resolve();
                });
            });
        });
        return p;
    }
}

module.exports = Manager;