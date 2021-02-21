const Employee = require('./Employee');

class Intern extends Employee {
    constructor(teamMemberName, email, id, School) {
        super(teamMemberName, email, id);
        this.School = School;
    }
    getSchool() {
        return this.School;
    }
    getRole() {
        return (`Intern`);
    }
}
module.exports = Intern;  