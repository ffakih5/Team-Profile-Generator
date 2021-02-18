/*

The other three classes will extend Employee.
class Engineer extends Employee
github—GitHub username

getGithub()


getRole()—overridden to return 'Engineer'
*/


class Engineer {
    constructor(name, email, id, role){
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role;

    }

    getName() {
    return this.name;
    }

    getEmail() {
    return this.email;

    }

    getId() {
    return this.id;
    }

    getRole() {
    return this.role;
    }

}

module.exports = Engineer;  