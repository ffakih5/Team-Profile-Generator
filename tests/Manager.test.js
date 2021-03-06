const Manager = require("../lib/Manager.js");

describe("Manager", () => {

  describe("Initialization", () => {
    it("should return an object containing a 'office' property when called with the 'new' keyword", () => {
      const obj = new Manager("name", "employee ID", "email", "office number");

      expect("office" in obj).toEqual(true);
    });
    });

    describe("Get Role", () => {
    it("should return an object containing a 'role' property that matches 'Manager'", () => {
      
        const obj = new Manager("name", "employee ID", "emailAddress", "office number");

        const role = obj.getRole();

      expect (role).toEqual("Manager");
    });
    });

    describe("name", () => {
      it("should return an object containing 'teamMemberName' property that is equal to the first parameter", () => {
      
        const obj = new Manager("teamMemberName", "employee ID", "email", "office") ;
        const name = obj.teamMemberName;

        expect(name).toEqual("teamMemberName");
    });

    });

  });
