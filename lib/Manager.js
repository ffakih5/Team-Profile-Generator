const Employee = require('./Employee');

class Manager extends Employee {
    constructor(teamMemberName, email, id, officeNumber) {
        super(teamMemberName, email, id);
        this.officeNumber = officeNumber;
    }
    getofficeNumber() {
        return this.officeNumber;
    }
    getRole(){
        return (`Manager`);
    }

}
module.exports = Manager;  