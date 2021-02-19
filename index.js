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
        name: "name",

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
            name: "name",
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
    

    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(process.cwd(),
        fileName),data); 
}

function init() {
    inquirer.prompt(mainMenu,managerSelection,engineerSelection,internSelection)
    .then((data) =>{
        writeToFile("TEAM-PROFILE-GENERATOR", generateHTML({ ... inquirerResponses}));
        
    });
  }
  
init();