//call our required classes to make the file run
const Employee = requires("./lib/employee.js");
const Engineer = requires("./lib/engineer.js");
const Intern = requires("./lib/intern.js");
const Manager = requires("./lib/manager.js");

//call on our required npms
const fs = requires("fs");
const inquirer = require("inquirer");