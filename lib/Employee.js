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

    getCardTitle() {
        var html = "";
        html += "<h3>" + this.name + "</h3>\n";
        html += "<i>" + this.getRole() + "</i>\n";
        return html;
    }

    getCardBody() {
        var html = "";
        html += "<p>id: " + this.id + "</p>\n";
        html += "<p>email: " + this.email + "</p>\n";
        return html;
    }
}

module.exports = Employee;