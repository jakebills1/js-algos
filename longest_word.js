function LongestWord(sen) {
  var regex = new RegExp(/\W/, "g");
  var noPunct = sen.replace(regex, " ");
  var words = noPunct.split(" ").filter(function(word) {
    return word !== " ";
  });
  // debugger;
  var theLongestWord = words[0];
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > theLongestWord.length) {
      theLongestWord = words[i];
    }
  }
  return theLongestWord;
}
console.log(LongestWord("I Love Code"));
