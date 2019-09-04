function one_away(str1, str2) {
  return can_insert(str1, str2) || can_replace(str1, str2) ? true : false;
}
function can_insert(str1, str2) {
  // if strings contain 1 letter difference and 1 length difference
  if (Math.abs(str1.length - str2.length) !== 1) {
    return false;
  }
  var countArr = initArray();
  for (var i = 0; i < str1.length; i++) {
    countArr[str1.charCodeAt(i)]++;
  }
  for (var i = 0; i < str2.length; i++) {
    countArr[str2.charCodeAt(i)]--;
  }
  var countOfOnes = 0;
  for (var i = 0; i < countArr.length; i++) {
    if (countArr[i] === 1) {
      countOfOnes += 1;
    }
  }
  return countOfOnes === 1 ? true : false;
}
function can_replace(str1, str2) {
  // finds out whether one character can be replaced to make the strings equal
  if (str1.length !== str2.length) {
    return false;
  }
  var countArr = initArray();
  for (var i = 0; i < str1.length; i++) {
    countArr[str1.charCodeAt(i)]++;
  }
  for (var i = 0; i < str2.length; i++) {
    countArr[str2.charCodeAt(i)]--;
  }
  var countOfOnes = 0;
  for (var i = 0; i < countArr.length; i++) {
    if (countArr[i] === 1 || countArr[i] === -1) {
      countOfOnes += 1;
    }
  }
  return countOfOnes === 2 ? true : false;
}
function initArray() {
  let arr = new Array(256);
  arr.fill(0, 0);
  return arr;
}
module.exports = one_away;
/*
 * write a function that determines whether two strings could become equal by inserting, removing, or replacing a character
 * method ( O(n)):
 * 1. check the following three methods. if all are true, return true, else, return false
 * a. can insert: string lengths are exactly 1 different, and the shorter string contains only letters present in the longer string
 * b. can replace: string lengths are equal, and they have 1 dissimilar character and all other chars are the same
 */
