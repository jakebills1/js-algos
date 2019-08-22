// given a range of numbers return the count of numbers that don't include a number 5 ( 5, 15,,,)
function dontGiveMeFive(start, end) {
  if (end < start) {
    throw "1st parameter must be less than 2nd";
  } else if (isNaN(start) || isNaN(end)) {
    throw "arguments must be valid integers";
  }
  var count = 0;
  for (var i = start; i <= end; i++) {
    if (!hasFive(i)) {
      count++;
    }
  }
  return count;
}
function hasFive(num) {
  if (num.toString().match(/5/) !== null) {
    return true;
  }
  return false;
}
module.exports = dontGiveMeFive;
// ============== passed tests
// console.log(dontGiveMeFive(4, 10)); // should return 5
// console.log(dontGiveMeFive(-2, 6))
// console.log(dontGiveMeFive(1,9)); // should return 8
// console.log(dontGiveMeFive(4,17)); // should return 12
// ============== failed tests
