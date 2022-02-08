// look at management class
const Mgmt = require('../lib/mgmtClass');

// test list for management classes.
// 1. confirm the super method stores data to the parent class.
// 2. confirm child class's getRoom function works.
// 3. confirm get role function returns this workers correct role.
// 4. confirm the createCard function returns an accurate card.
describe("Mgmt", () => {
    describe("info via super", () => {
        it("should return the name, id, and email of the newly created head honcho.", () => {
            const mgmt = new Mgmt("Forest", "421", "hexaforest@gmail.com", "609");

            expect(mgmt.getName()).toEqual("Forest");
            expect(mgmt.getId()).toEqual("421");
            expect(mgmt.getEmail()).toEqual("hexaforest@gmail.com");
        });
    });

    describe("getRoomNumber method", () => {
        it("should return the room number of the newly created head honcho.", () => {
            const mgmt = new Mgmt("Forest", "421", "hexaforest@gmail.com", "609");

            expect(mgmt.getRoomNumber()).toEqual("609");
        });
    });

    describe("getRole method", () => {
        it("should return the role of the newly created head honcho as 'Team Lead'.", () => {
            const mgmt = new Mgmt("Forest", "421", "hexaforest@gmail.com", "609");

            expect(mgmt.getRole()).toEqual("Team lead");
        });
    });

    describe("createCard method", () => {
        it("should return and html string that is formatted for the generated html page.", () => {
            const mgmt = new Mgmt("Forest", "421", "hexaforest@gmail.com", "609");

            expect(mgmt.createCard().includes("Office # 609")).toBeTruthy();
        });
    });

});
