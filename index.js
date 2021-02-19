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
    type: "list",
    message: "Want to add another team member?",
    choices: ["Add Engineer", "Add Intern", "All done"],
    name: "selectMainMenu",
}

const managerSelection = [
    {   
        type: "input",
        message: "Manager's name",
        name: "name",

    },
    {   type: "input",
        message: "Manager's ID",
        name: "id",

    },

    {
        type: "input",
        message: "Manager's Email",
        name: "email",
    },

    {   type: "input",
        message: "Manager's office No.",
        name: "office",
    
    },

]
    

    {   type: "input",
        message: "Link to deployed page",
        name: "deployedPage",

    },
    {   type: "input",
        message: "Key in a list for table of contents",
        name: "table of contents ",

    },
    {   type: "input",
        message: "Key in information on installation of this application",
        name: "installation",

    },
    {
        type: "input",
        message: "Key in information for application usage",
        name: "usage",

    },
    {
        type: "checkbox",
        message: "Key in a selection from the list of licenses",
        choices:[
            "MIT",
            "NONE",

        ],
        name: "license",

    },
    {
        type: "input",
        message: "Key in any contributors",
        name: "contributing",

    },
    {
        type: "input",
        message: "command to run tests",
        name: "tests",
        default: "npm test"

    },
  
   

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, (data), (err) =>
        err ? console.log(err) : console.log("!")

    )

}

function init() {
    inquirer.prompt(questions)
    .then((data) =>{
        writeToFile("TEAM-PROFILE-GENERATOR", generateHTML(data));
    });


  }
  
init();