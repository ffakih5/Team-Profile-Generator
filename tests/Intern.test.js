const Intern = require("../lib/Intern.js");

describe("Intern", () => {

  describe("Initialization", () => {
    it("should return an object containing a 'profile' property when called with the 'new' keyword", () => {
      const obj = new Intern("name", "ID", "email", "school");

      expect("School" in obj).toEqual(true);
    });
    });

    describe("Get Role", () => {
    it("should return an object containing a 'role' property that matches 'Intern'", () => {
      
        const obj = new Intern("name", "ID", "email", "school",);

        const role = obj.getRole();

      expect (role).toEqual("Intern");
    });
    });

    describe("Name", () => {
    it("should return an object containing 'teamMemberName' property that is equal to the first parameter", () => {
      
        const obj = new Intern("teamMemberName", "ID", "email", "school") ;
        const name= obj.teamMemberName;

      expect(name).toEqual("teamMemberName");
    });

    });

  });
