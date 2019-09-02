// function palindrome_permutation(str) {
//   if (palindrome_test(str)) {
//     return true;
//   } else {
//     str = permute(str);
//     palindrome_permutation(str);
//   }
// }
// function palindrome_test(str) {
//   str = strip_spaces(str);
//   var stack = [];
//   var n = str.length;
//   for (var i = 0; i < n; i++) {
//     stack.push(str[i]);
//   }
//   for (var i = 0; i < n; i++) {
//     if (str[i] !== stack.pop()) {
//       return false;
//     }
//   }
//   return true;
// }
// function strip_spaces(str) {
//   str = str.split(" ");
//   var results = "";
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       results += str[i];
//     }
//   }
//   return results;
// }
// function permute(str) {
//   var arr = str.split("");
//   var results = [];
//   for (var i = 0; i < str.length; i++) {
//     var n = Math.floor(Math.random() * arr.length);
//     results.push(arr[n]);
//     arr.splice(n, 1);
//   }
//   return results.join("");
// }
function palindrome_permutation(str) {
  var arr = initArray();
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      arr[str.charCodeAt(i)] += 1;
    }
  }
  var countOfOdd = 0;
  for (var i = 0; i < arr.length; i++) {
    if (countOfOdd > 1) {
      return false;
    } else {
      if (arr[i] !== 0) {
        if (arr[i] % 2 !== 0) {
          countOfOdd += 1;
        }
      }
    }
  }
  return true;
}
function initArray() {
  let arr = new Array(256);
  arr.fill(0, 0);
  return arr;
}
module.exports = palindrome_permutation;

/*
 * write a function that determines whether the given string is a permutation of a palindrome
 * brute force method:
 * 1. test whether initial string is a palindrome by using a stack? Ignore spaces
 * 2. if is palindrome, return true
 * 3. else, scramble string, and repeat 1, 2 until either test passes or all possible permutations are found
 *
 * counting method:
 * 1. initialize count array of 256 items all set to 0
 * 2. iterate over string, incrementing array index at the ascii char code
 * 3. for all non-zero array indeces, str is palindrome is all counts are even. at most one count can be odd
 */
