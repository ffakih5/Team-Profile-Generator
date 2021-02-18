const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, id, GitHub) {
        super(name, email, id);
        this.GitHub = GitHub;
    }
    getGithub() {
        return this.GitHub;
    }
    getRole(){
        return (`Engineer`);
    }
}
module.exports = Engineer;  