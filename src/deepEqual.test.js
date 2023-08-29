const { expect } = require("chai");
const deepEqual = require("./deepEqual");

describe("deepEqual", () => {
  it("should return true given undefined, undefined", () => {
    expect(deepEqual(undefined, undefined)).to.equal(true);
  });

  it("should return true given two value equal objects", () => {
    expect(deepEqual({ name: "Bob" }, { name: "Bob" })).to.equal(true);
  });

  it("should return true given two value null", () => {
    expect(deepEqual(null, null)).to.equal(true);
  });

  it("should return false given null and object", () => {
    expect(deepEqual(null, {})).to.equal(false);
  });

  it("should return true given object with different length and with undefined value", () => {
    expect(deepEqual({ name: "Bob", email: undefined }, { name: "Bob" })).to.equal(true);
  });

  it("should return false given objects with different length", () => {
    expect(deepEqual({ name: "Bob", email: 'bob@example.com' }, { name: "Bob" })).to.equal(false);
  });

});
