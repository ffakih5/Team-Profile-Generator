const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, id, School) {
        super(name, email, id);
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