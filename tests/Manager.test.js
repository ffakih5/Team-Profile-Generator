const Manager = require("../lib/Manager.js");

describe("Manager", () => {

  describe("Initialization", () => {
    it("should return an object containing a 'profile' property when called with the 'new' keyword", () => {
      const obj = new Manager("name", "employee ID", "email", "office number");

      expect("GitHub" in obj).toEqual(true);
    });
    });

    describe("Get Role", () => {
    it("should return an object containing a 'role' property that matches 'Manager'", () => {
      
        const obj = new Manager("name", "employee ID", "emailAddress", "office number");

        const role = obj.getRole();

      expect (role).toEqual("Manager");
    });
    });

    describe("Name", () => {
    it("should return an object containing 'employeeName' property that matches 'employeeName'", () => {
      
        const obj = new Manager("name", "employee ID", "email", "office number") ;
        const Name = obj.employeeName;

      expect(Name).toEqual("name");
    });

    });

  });
