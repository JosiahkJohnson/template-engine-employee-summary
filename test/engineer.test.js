const Engineer = require("../lib/engineer");

//Test the engineer's functions
define("Engineer", () => {
    //test the getGithub() function
    define("Get github function", () => {
        it("Should return the github name", () => {
            //initialize the test class
            const testClass = new Engineer("Joe", 27, "fakeEmail@email.com", "JoeKJacobson");

            //the test
            expect(testClass.getGithub()).toEqual("JoeKJacobson");
        });
    });
    
    //the getRole function should be overridden
    define("Get role function", () => {
        it('Should return "Engineer" for the employee\'s "role"', () => {
            //initialize another class
            const testClass = new Engineer("Joe", 27, "fakeEmail@email.com", "JoeKJacobson");

            //the test
            expect(testClass.getRole()).toEqual("Engineer");
        });
    });
});