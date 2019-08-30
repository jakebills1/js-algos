// function isPermutation(str1, str2) {
//   str1 = str1.split("");
//   str2 = str2.split("");
//   str1.sort(function(a, b) {
//     return a.localeCompare(b);
//   });
//   str2.sort(function(a, b) {
//     return a.localeCompare(b);
//   });
//   for (var i = 0; i < str1.length; i++) {
//     if (str1[i] !== str2[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// function isPermutation(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   var arr1 = initArray();
//   var arr2 = initArray();
//   for (var i = 0; i < str1.length; i++) {
//     arr1[str1.charCodeAt(i)] += 1;
//   }
//   for (var i = 0; i < str2.length; i++) {
//     arr2[str2.charCodeAt(i)] += 1;
//   }
//   for (var i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }
function isPermutation(str1, str2) {
  // space optimization of above counting method
  if (str1.length !== str2.length) {
    return false;
  }
  var arr = initArray();
  for (var i = 0; i < str1.length; i++) {
    arr[str1.charCodeAt(i)] += 1;
  }
  for (var i = 0; i < str1.length; i++) {
    arr[str2.charCodeAt(i)] -= 1;
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      return false;
    }
  }
  return true;
}
function initArray() {
  let arr = new Array(256);
  arr.fill(0, 0);
  return arr;
}
module.exports = isPermutation;
/*
 *  write function that, given two strings, checks if one is a permutation of other
 *  sorting method: (time complexity is O(n^2 + n^2 + n^2))
 *  1. sort each string
 *  2. if strings are now the same, return true
 *  3. else return false
 *
 *  counting method:
 *  1. initialize arr1 and arr2 as arrays of size 256, all indices set to the number 0. corresponds to ascii table
 *  2. iterate over str1, and increase the count of each index in arr1, corresponding to ascii value, for each letter
 *  3. repeat for arr2 and str2
 *  4. if arr1 and arr2 have the same counts, the strings are permutations of each other, return true
 *  5. else return false
 *
 *
 *
 *
 */
