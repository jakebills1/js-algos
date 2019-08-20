function duplicateEncode(word) {
  // for each character in word, scan through word, determinate if is duplicate
  // if true, push a ')' to the return array, else push a '('
  var encodedString = [];
  for (var i = 0; i < word.length; i++) {
    var regex;
    if (!/\w/.test(word[i])) {
      // escape special char in regex
      var string = "\\" + word[i];
      regex = new RegExp(string, "gi");
    } else {
      regex = new RegExp(word[i], "gi");
    }
    var arr = word.match(regex);
    if (arr.length > 1) {
      encodedString.push(")");
    } else {
      encodedString.push("(");
    }
  }
  return encodedString.join("");
}
module.exports = duplicateEncode;
// =========== passed tests
// duplicateEncode("wordd"); // returns ((())
// duplicateEncode("recede"); // should return ()()()
// duplicateEncode("Success"); // should return )())())
// =========== failed tests
duplicateEncode("(( @"); // need to escape ( in the regex
