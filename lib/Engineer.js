/*

The other three classes will extend Employee.
class Engineer extends Employee
github—GitHub username


getGithub()


getRole()—overridden to return 'Engineer'
*/ 
// need this line to access Employee
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, id, role, GitHub) {
        super(name, email, id, role);
        this.GitHub = GitHub;
    }
    getGithub() {
        return this.GitHub;
    }
}
module.exports = Engineer;  