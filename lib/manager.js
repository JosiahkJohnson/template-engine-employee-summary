//call the Employee class from another file
const Employee = require("./employee");

//declare our new manager class
class Manager extends Employee {
    //constructor for this class
    constructor(name, id, email, officeNumber){
        //satisfy the requirements for the base class
        super(name, id, email);
        //define the unique variable
        this.officeNumber = officeNumber;
    }

    //define the unique function
    getOfficeNumber(){
        return this.officeNumber;
    }

    //override the function in the base class to return Manager
    getRole(){
        return "Manager";
    }
}

//export the class for use in other files
module.exports = Manager;