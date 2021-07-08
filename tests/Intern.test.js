const Intern = require('../lib/Intern');

describe('Intern', () => {
    var intern = new Intern ();
    intern.set({
        name: "John Doe",
        id: "1337",
        email: "123@gmail.com",
        school: "UNCC"
    });

    it("verify role", () => {
        expect(intern.getRole()).toEqual("Intern");
    })

    it("verify school", () => {
        expect(intern.getSchool()).toEqual("UNCC");
    });
    
})