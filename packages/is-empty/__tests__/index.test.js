const { isEmpty } = require("../dist/is-empty.js");

describe("isEmpty", () => {
  it("should return true for an empty array", () => {
    expect(isEmpty([])).toBe(true);
  });

  it("should return false for a non empty array", () => {
    expect(isEmpty(["foo"])).toBe(false);
  });
});
