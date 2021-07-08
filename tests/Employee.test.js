const Employee = require('../lib/Employee');

describe('Employee', () => {
    var employee = new Employee();
    employee.set({
        name: "John Doe",
        id: "1337",
        email: "123@gmail.com"
    });

    it("verify role", () => {
        expect(employee.getRole()).toEqual("Employee");
    })

    it("verify name", () => {
        expect(employee.getName()).toEqual("John Doe");
    }); 

    it("verify id", () => {
        expect(employee.getId()).toEqual("1337");
    });    

    it("verify email", () => {
        expect(employee.getEmail()).toEqual("123@gmail.com");
    });    

    
})