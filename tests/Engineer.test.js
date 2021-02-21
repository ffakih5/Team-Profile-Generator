const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {

  describe("Initialization", () => {
    it("should return an object containing a 'GithHub' property when called with the 'new' keyword", () => {
      const obj = new Engineer("name", "ID", "email", "Github Username");

      expect("GitHub" in obj).toEqual(true);
    });
    });

    describe("Get Role", () => {
    it("should return an object containing a 'role' property that matches 'Engineer'", () => {
      
        const obj = new Engineer("name", "ID", "email", "Github Username");

        const role = obj.getRole();

      expect (role).toEqual("Engineer");
    });
    });

    describe("name", () => {
    it("should return an object containing 'name' property that matches 'name'", () => {
      
        const obj = new Engineer("name", "ID", "email", "GitHub Username") ;
        const name = obj.teamMemberName;

      expect(name).toEqual("teamMemberName");
    });

    });

  });
