/*

The other three classes will extend Employee.
class Engineer extends Employee
github—GitHub username

getGithub()


getRole()—overridden to return 'Engineer'
*/ 
// need this line to access Employee
const Vehicle = require('./vehicle');

class Engineer extends Employee {
    constructor(name, email, id, role){
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;

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

}

module.exports = Engineer;  