const generateHTML = require("./src/generateHtml.js");

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const fs = require("fs");
const inquirer = require("inquirer");


const Team = [];

const teamManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            message: "Manager's name",
            name: "teamMemberName",
        },
        {   
            type: "input",
            message:"Manager's ID",
            name: "id",
        },
        {
            type: "input",
            message: "Manager's Email",
            name: "email",
        },
        {
            type: "input",
            message: "Manager's office No.",
            name: "office",
        }
    ])
    .then(managerResponse => {
        const { teamMemberName, id, email, office} = managerResponse;
        const manager = new Manager (teamMemberName, id, email, office);

        Team.push(manager);
        console.log(manager);
    })
};

const teamEmployee = () => {
    console.log(`
    adding employees
    `);

    return inquirer.prompt ([
        {
            type: "list",
            message: "Employee's role",
            name: "role",
            choices: ["Engineer", "Intern"],
        },
        {
            type: "input",
            message: "Employee's Name",
            name: "teamMemberName",
        },
        {
            type: "input",
            message: "Employee's ID",
            name: "id",
        },
        {
            type: "input",
            message: "Employee's Email",
            name: "email",
        },
        {
            type: "input",
            message: "Employee's GitHub Username",
            name: "GitHub",
        },
        {
            type: "input",
            message: "Intern's School",
            name: "School",
        },
        {
            type: "confirm",
            message: "Want to add more team members?",
            name: "confirmTeamEmployee",
        },

    ])
    .then(teamData => {

        let {teamMemberName, id, email, role, GitHub, School, confirmTeamEmployee} = teamData;
        let teamMember;

        if (role === "Engineer"){
            teamMember = new Engineer (teamMemberName, id, email, GitHub);
            
            console.log(teamMember);

        } else if (role === "Intern") {
            teamMember = new Intern (teamMemberName, id, email, School);

            console.log(teamMember);
        }
        Team.push(teamMember);

        if (confirmTeamEmployee) {
            return teamEmployee(Team);
        } else {
            return Team;
        }
    })

};


const writeFile = data => {
    fs.writeFileSync('./dist/index.html', data, err => {

        if (err) {
            console.log(err);
            return;
        } else{
            console.log("Team profile created!")
        }
    })
};

teamManager()
.then(teamEmployee)
.then(Team => {
    return generateHTML(Team);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err)
});
