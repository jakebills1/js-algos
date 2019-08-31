const url_ify = require("./main");
test("it returns the input string with spaces between words replaced by %20", () => {
  expect(url_ify("Mr John Smith   ")).toBe("Mr%20John%20Smith");
});
