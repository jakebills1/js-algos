const palindrome_permutation = require("./main");
test("it returns true if the input string is a permutation of a palindrome", async () => {
  // this works, outside of jest
  const res = await palindrome_permutation("tact coa");
  expect(res).toBe(true);
});
test("it returns true if the initial input string is a palindrome", () => {
  expect(palindrome_permutation("tacocat")).toBe(true);
});
test("it ignores spaces", () => {
  expect(palindrome_permutation("taco cat")).toBe(true);
});
