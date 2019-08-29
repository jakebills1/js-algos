// function isUnique(str){
//     str = str.split("");
//     str.sort(function(a, b){
//         return a.localeCompare(b);
//     });
//     for(var i = 0; i < str.length; i++){
//         if (str[i] !== " " && str[i] === str[i + 1]){
//             return false;
//         }
//     }
//     return true;
// }
function isUnique(str) {
  var boolTable = initArray();
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      var asciiValue = str.charCodeAt(i);
      if (boolTable[asciiValue]) {
        return false;
      } else {
        boolTable[asciiValue] = true;
      }
    }
  }
  return true;
}
function initArray() {
  let arr = [];
  for (var i = 0; i > 256; i++) {
    arr.push(false);
  }
  return arr;
}
module.exports = isUnique;
/*
 * spec: determines if input string has all unique characters
 * brute force method:
 *   1. select the first character
 *   2. scan throught the string looking for occurences of the character
 *   3. increment a count to keep track of that
 *   4. if count exceeds 1, return false
 *   5. else, repeat steps 1-4 for each char in string
 * sorting method:
 *   1. sort the string ascending
 *   2. scan through the string
 *   3. if str[i] = str[i + 1], return false
 *   4. else, return true
 * array method:
 *   1. initialize an array of 256 booleans all set to false
 *   2. scan through the string, for each char set the boolean in the array index equal to the ascii code for that char to true
 *   3. when a boolean already set to true is encountered, the string must not be unique, return false
 *   4. else, return true
 */
