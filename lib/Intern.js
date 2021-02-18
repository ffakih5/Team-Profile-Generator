/*

The other three classes will extend Employee.
class Intern extends Employee
school

getSchool()

getRole()—overridden to return 'Intern'

*/
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, id, role, School) {
        super(name, email, id, role);
        this.School = School;
    }
    getSchool() {
        return this.School;
    }
}
module.exports = Intern;  