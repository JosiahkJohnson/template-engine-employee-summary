//call our required classes to make the file run
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");

//call on our required npms
const fs = require("fs");
const inquirer = require("inquirer");

//define the arrays that will contain the engineer manager and intern objects
const managers = [];
const engineers = [];
const interns = [];

//main function init() that will be called to start the program and handle all of the function calls
async function init(){
    //loop that will allow the user to add as many managers as they want, at least one
    while(true){
        //this if statement will only let you leave the loop if you have added at least one manager
        const reply = await addManager();
        if(reply.addManager === "yes"){
            //create new manager and add to the array
            const response = await defineManager();
            managers.push(createManager(response));
        }
        else if(managers.length > 0){
            //console.log(managers);
            break;
        }
        else{console.log("Must have at least one manager.")}
    }

    //loop that will allow the user to add as many engineers as they want, at least one
    while(true){
        //this statment will only let you leave the loop if you have added at least one Engineer to the project
        const reply = await addEngineer();
        if(reply.addEngineer === "yes"){
            //create new Engineer and add to the array
            const response = await defineEngineer();
            engineers.push(createEngineer(response));
        }
        else if(engineers.length > 0){
            //console.log(engineers);
            break;
        }
        else{console.log("Must have at least one Engineer.")}
    }

    //loop that allows you to assign as many interns as you want, these are optional
    while(true){
        const reply = await addIntern();
        if(reply.addIntern === "yes"){
            //create new Intern and add to the array
            const response = await defineIntern();
            interns.push(createIntern(response));
        }
        else{
            //console.log(interns);
            break;
        }
    }

    const html = templateHtml(managers, engineers, interns);

    fs.writeFile("output/index.html", html, function(err){
        if(err){
            console.log(err);
        }
    });

    console.log("Html written in output file");
}

//asks user if they want to add a manager
function addManager(){
    return inquirer.prompt(
        {
            type: "input",
            name: "addManager",
            message: "Add a manager?(yes/no)"
        }
    );
}

//define manager function
function defineManager(){
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Manager's name: "
        },
        {
            type: "input",
            name: "id",
            message: "Manager's ID number: "
        },
        {
            type: "input",
            name: "email",
            message: "Manager's email address: "
        },
        {
            type: "input",
            name: "office",
            message: "Manager's office number: "
        }
    ]);
}

//create manager function
function createManager(call){
    const newManager = new Manager(call.name, call.id, call.email, call.office);
    return newManager;
}

//the print managers function loops through all managers and prints their data to a div
function printManagers(managers){
    var list = ``;
    var i = 0;

    //please tell me why I couldnt use a forloop here. The code refused to go into it...
    while(i < managers.length){
        list += 
        `
            <div class = "bg-primary" >
                <div>Name: ${managers[i].getName()}</div>
        
                <div>Role: ${managers[i].getRole()}</div>
    
                <div>ID: ${managers[i].getId()}</div>
    
                <div>Email: ${managers[i].getEmail()}</div>
    
                <div>Office: ${managers[i].getOfficeNumber()}</div>
            </div>
        `;
        i++;
    }

    return list;
}

function printEngineers(engineers){
    var list = ``;
    var i = 0;

    while(i<engineers.length){
        list += 
        `
            <div class = "bg-primary" >
            
            <div>Name: ${engineers[i].getName()}</div>
        
            <div>Role: ${engineers[i].getRole()}</div>
    
            <div>ID: ${engineers[i].getId()}</div>
    
            <div>Email: ${engineers[i].getEmail()}</div>
    
            <div>Github: ${engineers[i].getGithub()}</div>
            </div>
        `;
        i++;
    }

    return list;
}

function printInterns(interns){
    var list = ``;
    var i = 0;

    while(i<interns.length){
        list += 
        `
            <div class = "bg-primary" >
                <div>Name: ${interns[i].getName()}</div>
        
                <div>Role: ${interns[i].getRole()}</div>
    
                <div>ID: ${interns[i].getId()}</div>
    
                <div>Email: ${interns[i].getEmail()}</div>
    
                <div>School: ${interns[i].getSchool()}</div>
            </div>
        `;
        i++;
    }

    return list;
}

//asks the user if they want to add an engineer
function addEngineer(){
    return inquirer.prompt(
        {
            type: "input",
            name: "addEngineer",
            message: "Add an engineer?(yes/no)"
        }
    );
}

//define engineer function requests info on the called engineer
function defineEngineer(){
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Engineer's name: "
        },
        {
            type: "input",
            name: "id",
            message: "Engineer's ID number: "
        },
        {
            type: "input",
            name: "email",
            message: "Engineer's email address: "
        },
        {
            type: "input",
            name: "github",
            message: "Engineer's Github username: "
        }
    ]);
}

//create engineer function
function createEngineer(call){
    const newEngineer = new Engineer(call.name, call.id, call.email, call.github);
    return newEngineer;
}

//asks the user if they want to add an intern
function addIntern(){
    return inquirer.prompt(
        {
            type: "input",
            name: "addIntern",
            message: "Add an intern?(yes/no)"
        }
    );
}

//define Intern function asks the user details about the new intern
function defineIntern(){
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Intern's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Intern's ID number: "
        },
        {
            type: "input",
            name: "email",
            message: "Intern's email address: "
        },
        {
            type: "input",
            name: "school",
            message: "The name if the Intern's school: "
        }
    ]);
}

//create intern function
function createIntern(call){
    const newIntern = new Intern(call.name, call.id, call.email, call.school);
    return newIntern;
}

//create the template html
function templateHtml(managers, engineers, interns){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Main</title>
    </head>
    <body>
        <div class="form-inline" id="managers">
            ${printManagers(managers)}
        </div>
        <div class="form-inline" id="engineers">
            ${printEngineers(engineers)}
        </div>
        <div class="form-inline" id="interns">
            ${printInterns(interns)}
        </div>
    </body>
    </html>`
}

init();