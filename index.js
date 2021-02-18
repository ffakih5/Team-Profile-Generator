const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const generateHTML = require('./src/generateHtml.js');

const Team = []

/* questions per class
refer to test page and build according 
function getInfo(){
    inquirer.prompt([{

   }])
}*/
    {   
        type: "input",
        message: "Key in GitHub username",
        name: "userName",

    },
    {   type: "input",
        message: "Key in Email address",
        name: "email",

    },

    {
        type: "input",
        message: "Key in project title",
        name: "title",
    },
    {   type: "input",
        message: "Key in a desription of your project",
        name: "description",
        
    },
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
        err ? console.log(err) : console.log("README is Here!")

    )

}

function init() {
    inquirer.prompt(questions)
    .then((data) =>{
        writeToFile("TEAM-PROFILE-GENERATOR", generateHTML(data));
    });


  }
  
init();