/*

The other three classes will extend Employee.
class Intern extends Employee
school

getSchool()

getRole()—overridden to return 'Intern'

*/
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, id, School) {
        super(name, email, id);
        this.School = School;
    }
    getSchool() {
        return this.School;
    }
}
module.exports = Intern;  