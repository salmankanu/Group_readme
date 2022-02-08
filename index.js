// npm packages
const inquirer = require('inquirer');
const fs = require('fs');

// new employee classes
const Mgmt = require("./lib/mgmtClass");
const Engineer = require("./lib/engineerClass");
const Intern = require('./lib/internClass');

// array to push created cards too.
let frends = [];

// start function, create manager from inputs, run create card function, then push the returned card into the frends array.
// move to the pathfinder prompt to decide what next.
const startBuild = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Welcome team manager! Please enter your first and last name.',
                name: 'headName'
            },
            {
                type: 'input',
                message: 'Please enter your employee ID.',
                name: 'headId'
            },
            {
                type: 'input',
                message: 'Please enter your Email address.',
                name: 'headEmail'
            },
            {
                type: 'number',
                message: 'Please enter your office number',
                name: 'officeNumber'
            }
        ]).then(data => {
            let bossMan = new Mgmt(data.headName, data.headId, data.headEmail, data.officeNumber);
            bossMan = bossMan.createCard();
            frends.push(bossMan);

            pathFinder();
        })
}

// prompt that lets you choose who to add to your team next, or to finish building team.
const pathFinder = () => {
    inquirer
        .prompt(
            {
                type: 'list',
                message: 'Thank you! Now, what would you like to do?',
                name: 'path',
                choices: [
                    'Add an engineer',
                    'Add an intern',
                    'Finish building your team.'
                ]
            }
        ).then(data => {
            if (data.path == 'Add an engineer') {
                addEngineer();
            } else if (data.path == 'Add an intern') {
                addIntern();
            } else {
                wrapUp();
            }
        })
}

// Add engineer prompt, create new employee and push card.
const addEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Please enter your engineer's name.",
                name: `engineerName`
            },
            {
                type: 'input',
                message: "Please enter your engineer's ID.",
                name: `engineerId`
            },
            {
                type: 'input',
                message: "Please enter your engineer's gitHub name.",
                name: `engineerGit`
            },
            {
                type: 'input',
                message: "Please enter your engineer's email address.",
                name: `engineerEmail`
            },
        ]).then(data => {
            let engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGit);
            engineer = engineer.createCard();
            frends.push(engineer);

            pathFinder();
        })
}

// Add intern prompt, create new employee and push card.
const addIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "Please enter your intern's name.",
                name: `internName`
            },
            {
                type: 'input',
                message: "Please enter your intern's ID.",
                name: `internId`
            },
            {
                type: 'input',
                message: "Please enter your intern's School name.",
                name: `internSchool`
            },
            {
                type: 'input',
                message: "Please enter your intern's email address.",
                name: `internEmail`
            },
        ]).then(data => {
            let intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            intern = intern.createCard();
            frends.push(intern);

            pathFinder();
        })
}

// final prompt to confirm you are done. if not, return to path finder. if so, select color theme and continue.
// after color select, create empty string, then for each frend, push the created card into the new string,
// then take html boilerplate code, insert in color theme class, and put all created cards inside of the body.
// use the html variable as the data and push to new html document "new team".
const wrapUp = () => {
    inquirer
        .prompt([
            {
                type: 'confirm',
                message: "Are you ready to build your team's html page?",
                name: 'isReady'
            },
        ]).then(data => {
            if (data.isReady) {
                inquirer
                    .prompt(
                        {
                            type: 'list',
                            message: 'Please select a color theme.',
                            name: 'colorTheme',
                            choices: [
                                "light",
                                "dark",
                                "evil"
                            ]
                        }
                    ).then(data => {
                        let teamCards = '';
                        frends.forEach(worker => {
                            teamCards += (worker + '\n');
                        })

                        let html = `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <link rel="stylesheet" href="./css/reset.css">
                            <link rel="stylesheet" href="./css/styles.css">
                            <link rel="icon" href='../assets/icon.jpeg'>
                            <title>Team Generator</title>
                        </head>
                        <body class="${data.colorTheme}">
                        <h1>Welcome! Here is your new team.</h1>
                        <div class="card-holder">
                        ${teamCards}
                        </div>
                        </body>
                        </html>
                        `;

                        fs.appendFile('./dist/newTeam.html', html, err => {
                            err ? console.log(new Error(err)) : console.log('Document created!');
                        })
                        return;
                    })
            } else {
                console.log("Heading back to team select.");
                pathFinder();
            }
        })
}


startBuild();