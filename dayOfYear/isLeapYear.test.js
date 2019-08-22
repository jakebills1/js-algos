const dayOfYear = require("./dayOfYear");
describe("isLeapYear, when passed a year, it", () => {
  test("returns 366 when passed a leap year", () => {
    expect(dayOfYear.isLeapYear(2004)).toBe(366);
  });
  test("returns 365 otherwise", () => {
    expect(dayOfYear.isLeapYear(2005)).toBe(365);
  });
});
