const Employee = require('./Employee');

class Manager extends Employee {
    constructor(teamMemberName, email, id, office) {
        super(teamMemberName, email, id);
        this.office = office;
    }
    getofficeNumber() {
        return this.office;
    }
    getRole(){
        return "Manager";
    }

}
module.exports = Manager;  