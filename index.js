var fs = require('fs');

const TeamWriter = require('./src/TeamWriter');

const inquirer = require('inquirer');

const Manager = require("./lib/Manager");

const Engineer = require("./lib/Engineer");

const Intern = require("./lib/Intern");

const addQuestion = [
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        choices: ['Engineer', 'Intern','Finish building team'],
        name: 'newMember',
    },
];

var team = [];

var manager = new Manager ();

function askTeamMember() {
    return new Promise ( (resolve, reject) => {
        inquirer.prompt(addQuestion).then((response) => {
        resolve(response.newMember);
        });
    });
}

manager.prompt().then( async () => {
    team.push(manager);
    var done = false;
    while (!done){
        var answer = await askTeamMember(); 
        var teamMember = null;
        switch (answer) {
            case "Engineer":
                teamMember = new Engineer();
                break;

            case "Intern":
                teamMember = new Intern();
                break;

            case "Finish building team":
                done = true;
                break;            
        }
        if (teamMember) {
            await teamMember.prompt();
            team.push(teamMember);
        }  
    }

    var teamwriter = new TeamWriter ('./dist/');
    teamwriter.write(team);
});


