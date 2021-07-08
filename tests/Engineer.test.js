const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    var engineer = new Engineer ();
    engineer.set({
        name: "John Doe",
        id: "1337",
        email: "123@gmail.com",
        github: "johndoe2021"
    });

    it("verify role", () => {
        expect(engineer.getRole()).toEqual("Engineer");
    })

    it("verify github", () => {
        expect(engineer.getGithub()).toEqual("johndoe2021");
    });
    
})