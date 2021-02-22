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
        //console.log(manager);
    })
};

const teamEngineer = () => {
    console.log(`
    adding engineer
    `);

    return inquirer.prompt ([
        {
            type: "input",
            message: "Engineer's role",
            name: "role",
        },
        {
            type: "input",
            message: "Engineer's Name",
            name: "teamMemberName",
        },
        {
            type: "input",
            message: "Engineer's ID",
            name: "id",
        },
        {
            type: "input",
            message: "Engineer's Email",
            name: "email",
        },
        {
            type: "input",
            message: "Engineer's GitHub Username",
            name: "GitHub",
        },


        
    ])
    .then(engineerResponse => {

        const {teamMemberName, id, email, role, GitHub, School, confirmTeamEmployee} = engineerResponse;
        const engineer = new Engineer (teamMemberName, id, email, GitHub);

        Team.push(engineer);


        Team.push(teamMember);

        
        
    
        
        
        

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
.then(teamEngineer)
.then(teamIntern)
.then(Team => {
    return generateHTML(Team);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err)
});
