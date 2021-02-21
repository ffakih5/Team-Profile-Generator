class Employee {
    constructor(teamMemberName, email, id){
        this.teamMemberName = teamMemberName;
        this.email = email;
        this.id = id;

    }
    getName() {
    return this.teamMemberName;
    }
    getEmail() {
    return this.email;
    }
    getId() {
    return this.id;
    }
    getRole() {
    return (`Employee`);
    }
}

module.exports = Employee;  