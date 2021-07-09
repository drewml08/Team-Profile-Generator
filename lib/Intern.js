const inquirer = require('inquirer');

const Employee = require("./Employee");

class Intern extends Employee{
    constructor() {
        super();
        this.school = "";
    }

    set (data){
        super.set(data);
        this.school = data.school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

    prompt() {
        const questions = [
            {
                type: 'input',
                message: 'At what school are you enrolled?',
                name: 'school_name', 
            },
        ];
        var p = new Promise( (resolve, reject) => {
            super.prompt().then( () => {
                inquirer.prompt(questions).then((response) => {
                    this.school = response.school_name;
                    resolve();
                });    
            });        
        });
        return p;
    }
    
    getCardBody() {
        var html = super.getCardBody();
        html += "<p>School: " + this.school + "</p>\n";
        return html;
    }
}

module.exports = Intern;