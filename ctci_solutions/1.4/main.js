function palindrome_permutation(str) {
  if (palindrome_test(str)) {
    return true;
  } else {
    str = permute(str);
    palindrome_permutation(str);
  }
}
function palindrome_test(str) {
  str = strip_spaces(str);
  var stack = [];
  var n = str.length;
  for (var i = 0; i < n; i++) {
    stack.push(str[i]);
  }
  for (var i = 0; i < n; i++) {
    if (str[i] !== stack.pop()) {
      return false;
    }
  }
  return true;
}
function strip_spaces(str) {
  str = str.split(" ");
  var results = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      results += str[i];
    }
  }
  return results;
}
function permute(str) {
  var arr = str.split("");
  var results = [];
  for (var i = 0; i < str.length; i++) {
    var n = Math.floor(Math.random() * arr.length);
    results.push(arr[n]);
    arr.splice(n, 1);
  }
  return results.join("");
}
module.exports = palindrome_permutation;

/*
 * write a function that determines whether the given string is a permutation of a palindrome
 * method:
 * 1. test whether initial string is a palindrome by using a stack? Ignore spaces
 * 2. if is palindrome, return true
 * 3. else, scramble string, and repeat 1, 2 until either test passes or all possible permutations are found
 *
 */
