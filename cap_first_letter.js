function LetterCapitalize(str) {
  var arr = str.split(" ");
  var results = "";
  for (var i = 0; i < arr.length; i++) {
    let firstLetter = arr[i][0].toUpperCase();
    let restOfWord = arr[i].slice(1);
    results = results
      .concat(firstLetter)
      .concat(restOfWord)
      .concat(" ");
  }
  return results;
}

console.log(LetterCapitalize("hello, world"));
