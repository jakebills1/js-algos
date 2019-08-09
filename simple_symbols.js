function SimpleSymbols(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/\w/) !== null && str[i].match(/\d/) === null) {
      if (i === 0 || i === str.length - 1) {
        return false;
      } else if (
        (str[i - 1] !== "+" && str[i + 1] !== "+") ||
        (str[i - 1] === "+" && str[i + 1] !== "+") ||
        (str[i - 1] !== "+" && str[i + 1] === "+")
      ) {
        return false;
      }
    }
  }
  return true;
}
// ================ passed test cases
console.log(SimpleSymbols("f++d+")); // should return false
console.log(SimpleSymbols("+d+=3=+s+")); // should return true
console.log(SimpleSymbols("+a=")); // should return false
console.log(SimpleSymbols("==a+")); // should return false
// ================ failed test cases
