// require employee class to build our management class upon it.
const Employee = require('./employeeClass')

// create new management class that extends off of employee class.
// take in 4 inputs for the contructor, 3 of which will use the super method to extend those inputs to the employee class's variables.
// create new variable for room number, set mgmt's role.
class Mgmt extends Employee {
    constructor(name, id, email, roomNumber){
        super(name, id, email);

        this.room = roomNumber;
        this.role = "Team lead";
    }

    // function to return room number.
    getRoomNumber() {
        return this.room;
    }

    // function that creates a default html card that uses the inputed values and gets pushed into the created html doc.
    createCard() {
        return `
        <span class="divider">Head honcho</span>    
        <div class='mgmt card'>
                <div class='card-head'>
                    <h2>${this.name}</h2>
                    <h3>${this.role}</h3>
                </div>
                <div class='card-info'>
                    <p>
                        ID: ${this.id}
                    </p>
                    <p>
                        Email: <a href="mailto:${this.email}">${this.email}</a>
                    </p>
                    <p>
                        Office # ${this.room}
                    </p>
                </div>
            </div>
            <span class="divider">The team:</span>`;
    }
}

// export this class for index.js.
module.exports = Mgmt;