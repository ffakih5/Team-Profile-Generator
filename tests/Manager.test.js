const Manager = require("../lib/Manager.js");

describe("Manager", () => {

  describe("Initialization", () => {
    it("should return an object containing a 'profile' property when called with the 'new' keyword", () => {
      const obj = new Engineer("employeeName", "ID", "emailAddress", "profile", "Github");

      expect("GitHub" in obj).toEqual(true);
    });
    });

    describe("Get Role", () => {
    it("should return an object containing a 'role' property that matches 'Engineer'", () => {
      
        const obj = new Engineer("employeeName", "ID", "emailAddress", "profile", "Github");

        const role = obj.getRole();

      expect (role).toEqual("Engineer");
    });
    });

    describe("Name", () => {
    it("should return an object containing 'employeeName' property that matches 'employeeName'", () => {
      
        const obj = new Engineer("employeeName", "ID", "emailAddress", "profile", "GitHub") ;
        const Name = obj.employeeName;

      expect(Name).toEqual("employeeName");
    });

    });

  });
