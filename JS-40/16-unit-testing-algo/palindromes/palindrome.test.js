const palindrome = require("./palindrome");

describe("Palindrome", () => {
  it("Should be a function", () => {
    expect(typeof palindrome).toEqual("function");
  });

  it("Should return a boolean", () => {
    expect(typeof palindrome("hello")).toEqual("boolean");
  });

  it("Should return true if is a palindrome", () => {
    expect(palindrome("kayak")).toBeTruthy();
    expect(palindrome("wow")).toBeTruthy();
  });

  it("Should return false if is a palindrome", () => {
    expect(palindrome("hello")).toBeFalsy();
    expect(palindrome("bye")).toBeFalsy();
  });

  it("Should return false if there is a space", () => {
    expect(palindrome(" hello")).toBeFalsy();
    expect(palindrome(" bye")).toBeFalsy();
  });
});
