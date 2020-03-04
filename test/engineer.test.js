const Engineer = require("../lib/engineer");

//Test the engineer's functions
describe("Engineer", () => {
    //test the getGithub() function
    describe("Get github function", () => {
        it("Should return the github name", () => {
            //initialize the test class
            const testClass = new Engineer("Joe", 27, "fakeEmail@email.com", "JoeKJacobson");

            //the test
            expect(testClass.getGithub()).toEqual("JoeKJacobson");
        });
    });
    
    //the getRole function should be overridden
    describe("Get role function", () => {
        it('Should return "Engineer" for the employee\'s "role"', () => {
            //initialize another class
            const testClass = new Engineer("Joe", 27, "fakeEmail@email.com", "JoeKJacobson");

            //the test
            expect(testClass.getRole()).toEqual("Engineer");
        });
    });
});