const dontGiveMeFive = require("./dontGiveMeFive");
describe("when passed possible range of numbers, it returns count of numbers that don't include a 5", () => {
  test("when passed [4, 17], it returns 12", () => {
    expect(dontGiveMeFive(4, 17)).toBe(12);
  });
  test("when passed [1, 9], it returns 8", () => {
    expect(dontGiveMeFive(1, 9)).toBe(8);
  });
});
describe("when passed illegitimate arguments, it", () => {
  test("throws exception if arguments are not in ascending order", () => {
    expect(() => {
      dontGiveMeFive(5, 4);
    }).toThrow();
  });
  test("throws exception if arguments are not numbers", () => {
    expect(() => {
      dontGiveMeFive("A", "B");
    }).toThrow();
  });
});
