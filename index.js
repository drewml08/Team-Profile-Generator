var fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");

var team = [];

var manager = new Manager ();

manager.prompt().then( () => {
    team.push(manager);
    console.log(manager);
});
