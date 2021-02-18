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
    constructor(name, email, id, role, GitHub){
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;
        this.GitHub = GitHub;

    }

    getName() {
    return this.name;
    }

    getEmail() {
    return this.email;

    }

    getId() {
    return this.id;
    }

    getRole() {
    return this.role;
    }

    getGithub() {
        return this.GitHub;
    }

}

module.exports = Engineer;  