/*

The other three classes will extend Employee.
class Engineer extends Employee
github—GitHub username


getGithub()

// no role required.. just getRole() and return the title!!
getRole()—overridden to return 'Engineer'
*/ 
// need this line to access Employee
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, id, GitHub) {
        super(name, email, id);
        this.GitHub = GitHub;
    }
    getGithub() {
        return this.GitHub;
    }
}
module.exports = Engineer;  