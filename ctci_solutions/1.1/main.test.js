const isUnique = require("./main");
test("it returns true if input string contains only unique characters", () => {
  expect(isUnique("a")).toBe(true)
  expect(isUnique("aaa")).toBe(false)
  expect(isUnique("abcdefghijklmnopqrstuvwxyz")).toBe(true)
  expect(isUnique("aghdfklafkdafds")).toBe(false)
})
test("it ignores spaces", () => {
  expect(isUnique("abcd ef g")).toBe(true)
  expect(isUnique("a a a a ")).toBe(false)
})
