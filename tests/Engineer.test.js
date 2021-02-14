const Engineer = require("../lib/Employee.js");

describe("Engineer", () => {

  describe("Initialization", () => {
    it("should return an object containing a 'profile' property when called with the 'new' keyword", () => {
      const obj = new Employee();

      expect("profile" in obj).toEqual(true);
    });
    });

    describe("Get Role", () => {
    it("should return an object containing a 'role' property that matches 'Engineer'", () => {
      
        const obj = new Employee();

      const role = obj.getRole();

      expect (role).toEqual("");
    });
  });

    describe("Name", () => {
    it("should return an object containing 'employeeName' property that matches 'employeeName'", () => {
      
        const obj = new Employee("EmployeeName", "ID", "emailAddress", "profile", "office number") ;
        const Name = obj.employeeName;

      expect(Name).toEqual("employeeName");
    });

    });

  });
