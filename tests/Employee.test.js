const Employee = require("../lib/Employee.js");

describe("Employee", () => {

  describe("Initialization", () => {
    it("should return an object containing a 'profile' property when called with the 'new' keyword", () => {
      const obj = new Employee();

      expect("profile" in obj).toEqual(true);
    });
    });

    it("should default 'number' to 0", () => {
      const obj = new Arithmetic();

      expect(obj.number).toEqual(0);
    });
  });

  describe("Get Role", () => {
    it("should return an object containning a 'role' property that equals 'Employee'", () => {
      const obj = new Employee('name' name, employee ID, email address, and office number) ;

      expect(obj instanceof Arithmetic).toEqual(true);
    });

    it("should return a new 'Arithmetic' object that has an updated 'number' value", () => {
      const num = 8;
      const added = 7;
      const sum = num + added;

      const { number } = new Arithmetic(num).plus(added);

      expect(number).toEqual(sum);
    });
  });

  describe("minus", () => {
    it("should return a new 'Arithmetic' object", () => {
      const obj = new Arithmetic(9).minus(4);

      expect(obj instanceof Arithmetic).toEqual(true);
    });

    it("should return a new 'Arithmetic' object that has an updated 'number' value", () => {
      const num = 10;
      const subtracted = 17;
      const difference = num - subtracted;

      const { number } = new Arithmetic(num).minus(subtracted);

      expect(number).toEqual(difference);
    });
  });

  describe("value", () => {
    it("should return the 'Arithmetic' object's 'number' value", () => {
      const num = 10;
      const obj = new Arithmetic(num);

      const result = obj.value();

      expect(result).toEqual(num);
    });
  });
});
