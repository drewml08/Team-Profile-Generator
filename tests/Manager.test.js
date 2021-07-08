const Manager = require('../lib/Manager');

describe('Manager', () => {
    var manager = new Manager();
    manager.set({
        name: "John Doe",
        id: "1337",
        email: "123@gmail.com",
        officeNumber: "1-800-555-5555"
    });

    it("verify role", () => {
        expect(manager.getRole()).toEqual("Manager");
    })

    it("verify number", () => {
        expect(manager.getOfficeNumber()).toEqual("1-800-555-5555");
    });
    
})