//call the class from another file
const Employee = require("./employee");

//define our new Engineer class based on the employee class
class Engineer extends Employee{
    //construct our new class
    constructor(name, id, email, github){
        //construct our base class
        super(name, id, email);
        //unique variable
        this.github = github;
    }

    //unique function
    getGithub(){
        return this.getGithub;
    }

    //override the getrole function to return Engineer
    getRole(){
        return "Engineer";
    }
}

//export our new class
module.exports = Engineer;