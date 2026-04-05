const hasDuplicateIds = require("./hasduplicateids");

describe("DOM Tree has duplicate IDS", () => {
  it("should be a function", () => {
    expect(typeof hasDuplicateIds).toEqual("function");
  });

  it("should return a boolean", () => {
    expect(typeof hasDuplicateIds()).toEqual("boolean");
  });

  it("should return a false if no root", () => {
    expect(hasDuplicateIds()).toEqual(false);
  });

  it("will return true if has duplicate IDS", () => {
    const root = document.createElement("div");
    const child1 = document.createElement("div");
    const child2 = document.createElement("div");

    root.appendChild(child1);
    root.appendChild(child2);

    //Add duplicate IDS

    root.id = "root";
    child1.id = "child";
    child2.id = "child";

    const result = hasDuplicateIds(root);
    expect(result).toEqual(true);
  });
});
