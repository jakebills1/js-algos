const one_away = require("./main");
test("it returns true if the two strings could become equal using one edit", () => {
  expect(one_away("pale", "ple")).toBe(true);
  expect(one_away("pales", "pale")).toBe(true);
  expect(one_away("pale", "bale")).toBe(true);
  expect(one_away("pale", "bake")).toBe(false);
});
