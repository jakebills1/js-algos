const dayOfYear = require("./dayOfYear");
describe("when passed a string representing a day of the year in YYYY-MM-DD format, it", () => {
  test("returns the numberof that day of the year if the month is january", () => {
    expect(dayOfYear.getDayOfYear("2019-01-19")).toBe(19);
  });
  test("returns the number of that day of the year if the month is not january", () => {
    expect(dayOfYear.getDayOfYear("2019-03-15")).toBe(74);
  });
  test("returns the number of the year in a leap year", () => {
    expect(dayOfYear.getDayOfYear("2004-03-01")).toBe(61);
  });
});
describe("when passed an invalid dataString as input, it", () => {
  test("throws an exception", () => {
    expect(() => {
      dayOfYear.getDayOfYear("fdsahjk");
    }).toThrow();
  });
});
