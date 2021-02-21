const Employee = require("../lib/Employee.js");

//describe("Employee", () => {

 //describe("Initialization", () => {
    //it("should return an object containing a 'profile' property when called with the 'new' keyword", () => {
      //const obj = new Employee("name", "ID", "email", "office number");

      //expect("profile" in obj).toEqual(true);
    //});
    //});

    describe("Get Role", () => {
    it("should return an object containing a 'role' property that matches 'Employee'", () => {
      
        const obj = new Employee("teamMemberName", "ID", "email", "office number");

      const role = obj.getRole();

      expect (role).toEqual("Employee");
    });
    });

    describe("name", () => {
    it("should return an object containing 'teamMemberName' property that matches the first parameter", () => {
      
        const obj = new Employee("name", "ID", "email", "office number") ;
        const name = obj.teamMemberName

      expect(name).toEqual("teamMemberName");
    });

    });

  //});
