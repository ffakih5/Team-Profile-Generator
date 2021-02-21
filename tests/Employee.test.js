const Employee = require("../lib/Employee.js");

describe("Employee", () => { 

  describe("Initialization", () => {
    describe("name", () => {
      it("should return an object containing 'teamMemberName' property that matches the first parameter", () => {
        
          const obj = new Employee("teamMemberName", "ID", "email", "office");
          const name = obj.teamMemberName
  
        expect(name).toEqual("teamMemberName");
        });
    });
  });
    
    describe("Get Role", () => {
    it("should return an object containing a 'role' property that matches 'Employee'", () => {
      
        const obj = new Employee("teamMemberName", "ID", "email", "office number");

        const role = obj.getRole();

      expect (role).toEqual("Employee");
      });
    });

});