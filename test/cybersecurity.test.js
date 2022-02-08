const Engineer = require('../lib/engineerClass');

describe("Engineer", () => {
    describe("info via super", () => {
        it("should return the name, id, and email of the newly created engineer.", () => {
            const engineer = new Engineer("Forest", "421", "hexaforest@gmail.com", "ForestW70");

            expect(engineer.getName()).toEqual("Forest");
            expect(engineer.getId()).toEqual("421");
            expect(engineer.getEmail()).toEqual("hexaforest@gmail.com");
        });
    });

    describe("getGithub method", () => {
        it("should return the github username of the newly created engineer.", () => {
            const engineer = new Engineer("Forest", "421", "hexaforest@gmail.com", "ForestW70");

            expect(engineer.getGithub()).toEqual("ForestW70");
        });
    });

    describe("getRole method", () => {
        it("should return the role of the newly created employee as 'employee'.", () => {
            const engineer = new Engineer("Forest", "421", "hexaforest@gmail.com", "ForestW70");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });

    describe("createCard method", () => {
        it("should return and html string that is formatted for the generated html page.", () => {
            const engineer = new Engineer("Forest", "421", "hexaforest@gmail.com", "ForestW70");

            expect(engineer.createCard().includes("ID: 421")).toBeTruthy();
        });
    });

});
