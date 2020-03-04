//call the file
const Employee = require("../lib/employee");

//testing the Employee class to make sure it returns what it should return
define("Employee", () => {
    //test the getName() function.
    define("Get name function", () => {
        it("Should return the Employee's name.", () => {
            //setup the test class
            const testClass = new Employee("Bill", 12, "someEmail@email.com");

            //now test the function
            expect(testClass.getName()).toEqual("Bill");
        });
    });

    //test the getEmail() function
    define("Get Email function.", () => {
        it("Should return the Employee's email address.", () => {
            //setup the test class
            const testClass = new Employee("Bill", 12, "someEmail@email.com");

            //now test it
            expect(testClass.getEmail()).toEqual("someEmail@email.com");
        });
    });

    //test the getId() function.
    define("Get ID function.", () => {
        it("Should return the Employee's ID.", () => {
            //setup class
            const testClass = new Employee("Bill", 12, "someEmail@email.com");

            //now test it
            expect(testClass.getId()).toEqual(12);
        });
    });

    //test the getRole() function
    define("Get Role function.", () => {
        it('Should return "Employee" for "role"', () => {
            //setup test class
            const testClass = new Employee("Bill", 12, "someEmail@email.com");

            //now test it
            expect(testClass.getRole).toEqual("Employee");
        });
    });
});