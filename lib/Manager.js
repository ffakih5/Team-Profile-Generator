/*

The other three classes will extend Employee.
class Manager extends Employee
add officeNumber
getRole()—overridden to return 'Manager'

*/

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id);
        this.officeNumber = officeNumber;
    }
    getofficeNumber() {
        return this.officeNumber;
    }
    getRole(){
        rutrn (`Manager`);
    }

}
module.exports = Manager;  