//call the file
const Employee = require("../lib/employee");

//testing the Employee class to make sure it returns what it should return
describe("Employee", () => {
    //test the getName() function.
    describe("Get name function", () => {
        it("Should return the Employee's name.", () => {
            //setup the test class
            const testClass = new Employee("Bill", 12, "someEmail@email.com");

            //now test the function
            expect(testClass.getName()).toEqual("Bill");
        });
    });

    //test the getEmail() function
    describe("Get Email function.", () => {
        it("Should return the Employee's email address.", () => {
            //setup the test class
            const testClass = new Employee("Bill", 12, "someEmail@email.com");

            //now test it
            expect(testClass.getEmail()).toEqual("someEmail@email.com");
        });
    });

    //test the getId() function.
    describe("Get ID function.", () => {
        it("Should return the Employee's ID.", () => {
            //setup class
            const testClass = new Employee("Bill", 12, "someEmail@email.com");

            //now test it
            expect(testClass.getId()).toEqual(12);
        });
    });

    //test the getRole() function
    describe("Get Role function.", () => {
        it('Should return "Employee" for "role"', () => {
            //setup test class
            const testClass = new Employee("Bill", 12, "someEmail@email.com");

            //now test it
            expect(testClass.getRole()).toEqual("Employee");
        });
    });
});