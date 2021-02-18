/*

The other three classes will extend Employee.
class Manager extends Employee
add officeNumber
getRole()—overridden to return 'Manager'

*/

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, id, role, officeNumber) {
        super(name, email, id, role);
        this.officeNumber = officeNumber;
    }
    getofficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;  