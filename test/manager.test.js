const Manager = require("../lib/manager");

//Test the engineer's functions
define("Manager", () => {
    //test the getOfficeNumber() function
    define("Get github function", () => {
        it("Should return the office number of the manager", () => {
            //initialize the test class
            const testClass = new Manager("Joe", 27, "fakeEmail@email.com", 12);

            //the test
            expect(testClass.getOfficeNumber()).toEqual(12);
        });
    });
    
    //the getRole function should be overridden
    define("Get role function", () => {
        it('Should return "Manager" for the employee\'s "role"', () => {
            //initialize another class
            const testClass = new Manager("Joe", 27, "fakeEmail@email.com", 12);

            //the test
            expect(testClass.getRole()).toEqual("Manager");
        });
    });
});