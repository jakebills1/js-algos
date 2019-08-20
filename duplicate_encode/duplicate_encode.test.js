const duplicate_encode = require("./DuplicateEncode");
test("it returns ((( when passed 'din'", () => {
  expect(duplicate_encode("din")).toBe("(((");
});
test("it returns ()()() when passed 'recede'", () => {
  expect(duplicate_encode("recede")).toBe("()()()");
});
// duplicateEncode("(( @"); // need to escape ( in the regex
test("it returns ))(( when passed (( @", () => {
  expect(duplicate_encode("(( @")).toBe("))((");
});
