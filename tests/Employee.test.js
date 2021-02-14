const Employee = require("../lib/Employee.js");

describe("Employee", () => {

  describe("Initialization", () => {
    it("should return an object containing a 'profile' property when called with the 'new' keyword", () => {
      const obj = new Employee("employeeName", "ID", "emailAddress", "profile", "office number");

      expect("profile" in obj).toEqual(true);
    });
    });

    describe("Get Role", () => {
    it("should return an object containing a 'role' property that matches 'Employee'", () => {
      
        const obj = new Employee("employeeName", "ID", "emailAddress", "profile", "office number");

      const role = obj.getRole();

      expect (role).toEqual("Employee");
    });
  });

    describe("Name", () => {
    it("should return an object containing 'employeeName' property that matches 'employeeName'", () => {
      
        const obj = new Employee("employeeName", "ID", "emailAddress", "profile", "office number") ;
        const Name = obj.employeeName;

      expect(Name).toEqual("employeeName");
    });

    });

  });
