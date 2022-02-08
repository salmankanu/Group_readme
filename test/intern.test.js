const Intern = require('../lib/internClass');

describe("Intern", () => {
    describe("info via super", () => {
        it("should return the name, id, and email of the newly created intern.", () => {
            const intern = new Intern("Forest", "421", "hexaforest@gmail.com", "George Washington University");

            expect(intern.getName()).toEqual("Forest");
            expect(intern.getId()).toEqual("421");
            expect(intern.getEmail()).toEqual("hexaforest@gmail.com");
        });
    });

    describe("getSchool method", () => {
        it("should return the github username of the newly created intern.", () => {
            const intern = new Intern("Forest", "421", "hexaforest@gmail.com", "George Washington University");

            expect(intern.getSchool()).toEqual("George Washington University");
        });
    });

    describe("getRole method", () => {
        it("should return the role of the newly created Intern as 'Intern'.", () => {
            const intern = new Intern("Forest", "421", "hexaforest@gmail.com", "George Washington University");

            expect(intern.getRole()).toEqual("Intern");
        });
    });

    describe("createCard method", () => {
        it("should return and html string that is formatted for the generated html page.", () => {
            const intern = new Intern("Forest", "421", "hexaforest@gmail.com", "George Washington University");

            expect(intern.createCard().includes("Student at George Washington University")).toBeTruthy();
        });
    });

});