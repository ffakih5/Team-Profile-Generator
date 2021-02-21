const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(teamMemberName, email, id, GitHub) {
        super(teamMemberName, email, id);
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