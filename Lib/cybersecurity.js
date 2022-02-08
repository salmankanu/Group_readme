const Employee = require('./employeeClass')

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);

        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }

    createCard() {
        return `
            <div class='engin card'>
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
                        GitHub Profile: <a href='https://github.com/${this.github}' target='_blank'>${this.github}</a>
                    </p>
                </div>
            </div>`;
    }
}


module.exports = Engineer;