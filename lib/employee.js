//Define our base class of Engineer
class Employee {
    //required parameters to build this class
    constructor(name, id, email){
        //define our class variables
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //returns name
    getName(){
        return this.name;
    }

    //returns id
    getId(){
        return this.id;
    }

    //returns email
    getEmail(){
        return this.email;
    }

    //returns string that says Employee
    getRole(){
        return "Employee";
    }
}

//export our class
module.exports = Employee;