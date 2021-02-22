const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const generateHTML = require("./src/generateHtml.js");

const Team = []

const mainMenu = {
    type: "checkbox",
    message: "Want to add another team member?",
    choices: [
    "Add Engineer",
    "Add Intern", 
    "All done"
    ],
    name: "selectMainMenu",
}

const managerSelection = [
    {   
        type: "input",
        message: "Manager's name",
        name: "teamMemberName",

    },
    {   
        type: "input",
        message: "Manager's ID",
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
    
    },

];
    const engineerSelection = [
        {   
            type: "input",
            message: "Engineer's name",
            name: "name",
        },
        {
            type: "input",
            message: "Engineer's Email",
            name: "email",
    
        },
        {   
            type: "input",
            message: "Engineer's ID",
            name: "id",
        },
        {       
            type: "input",
            message: "Engineer's GitHub username",
            name: "GitHub",
        },
    ];

     const internSelection = [
        {
            type: "input",
            message: "Intern's name",
            name: "teamMemberName",
        },
        {
            type: "input",
            message: "Intern's Email",
            name: "email",
        },
        {
            type: "input",
            message: "Intern's ID",
            name: "id",
        },
        {
            type: "input",
            message: "Intern's School",
            name: "School",
        }
    
     ];
    
function main () {
    inquirer    
        .prompt (mainMenu)
            .then((data) => { 
                if (data.mainMenu === "Add Engineer") {
                    console.log("Adding Engineer :)");
                    plusEngineer();
                } else if (data.mainMenu === "Add Intern"){
                    console.log("Adding an intern :)");
                    plusIntern();
                } else {
                    generateHTML(Team);
                    console.log(Team);
                    console.log("Here's your team!");

                }
            });           
}

function plusManager () {
    inquirer
        .prompt(managerSelection)
            .then((data) => {
                const manager = new Manager(data.teamMemberName, data.id, data.email, data.office);
                plusTeam(manager);
                main();
            });
}

function plusEngineer (){
    inquirer
        .prompt(engineerSelection)
            .then((data) => {
                const engineer = new Engineer(data.teamMemberName, data.id, data.email,data.GitHub);
                plusTeam(engineer);
                main();
            });
}

function plusIntern(details) {
    inquirer
        .prompt(internSelection)
            .then((data) => { 
                const intern = new Intern(data.teamMemberName, data.id, data.email,data.School);
                plusTeam(intern);
                main();
            });

}

function plusTeam(details) {
    let object = {};
    object["name"] = details.teamMemberName;
    object["role"] = details.getRole();
    object["id"] = details.id;
    object["email"] = details.email;
    if (object["role"] === "Manager"){
        object["office"] = details.office;
    } else if(object["role"] === "Engineer") {
        object["GitHub"] = details.GitHub;
    } else if(object ["role"] === "Intern"){
        object["School"] = details.School
    }
    Team.push(object);
}


function init() {
    console.log("Hi, to begin building your team press enter");
    plusManager();
  }
  
init();