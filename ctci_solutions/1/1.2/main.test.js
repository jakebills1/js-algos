const isPermutation = require("./main");
test("it returns true if two strings are permutations of each other", () => {
  expect(isPermutation("apple", "apple")).toBe(true);
  expect(isPermutation("apple", "donut")).toBe(false);
  expect(isPermutation("apple", "pplea")).toBe(true);
  expect(isPermutation("donut", "deoae")).toBe(false)
});
