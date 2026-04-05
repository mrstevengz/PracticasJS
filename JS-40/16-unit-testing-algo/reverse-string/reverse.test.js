const reverseString = require("./reverse");

describe("Reverse String", () => {
  it("should be a function", () => {
    expect(typeof reverseString).toEqual("function");
  });

  it("should return a string", () => {
    expect(typeof reverseString("hello")).toEqual("string");
  });

  it("should return the reversed string", () => {
    expect(reverseString("hello")).toEqual("olleh");
    expect(reverseString("yooo")).toEqual("oooy");
    expect(reverseString("hello world")).toEqual("dlrow olleh");
  });
});
