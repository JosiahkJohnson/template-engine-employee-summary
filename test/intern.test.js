//call the file
const Intern = require("../lib/intern");

//testing the intern's functions
describe("Intern", () => {
    //test the getSchool() function
    describe("Get school function", () => {
        it("Should return the github name", () => {
            //initialize the test class
            const testClass = new Intern("Joe", 27, "fakeEmail@email.com", "SMU");

            //the test
            expect(testClass.getSchool()).toEqual("SMU");
        });
    });
    
    //the getRole function should be overridden
    describe("Get role function", () => {
        it('Should return "Intern" for the employee\'s "role"', () => {
            //initialize another class
            const testClass = new Intern("Joe", 27, "fakeEmail@email.com", "SMU");

            //the test
            expect(testClass.getRole()).toEqual("Intern");
        });
    });
});