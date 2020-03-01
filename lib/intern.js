//call the class from the employee.js file
const Employee = requires("./employee.js");

//defining our new class Intern based on the Employee class
class Intern extends Employee {
    //construct the new class
    constructor(name, id, email, school){
        //set variables of our base class
        super(name, id, email);
        //define the unique class varaible
        this.school = school;
    }

    //define the unique function
    getSchool(){
        return this.school;
    }

    //override the get role function
    getRole(){
        return "Intern";
    }
}

//export the intern class for use
module.exports = Intern;