function LetterChanges(str) {
  let results = "";
  for (var i = 0; i < str.length; i++) {
    let char = letterShift(str[i]);
    let vowelTest = vowelCase(char);
    results = results.concat(vowelTest);
  }
  return results;
}
function letterShift(char) {
  if (char.match(/\w/) !== null && char.match(/\d/) === null) {
    // if the char is a letter and not a digit
    var results = String.fromCharCode(
      ((char.charCodeAt(0) - 97 + 1) % 26) + 97
    );
    // formula for incrementing letter where 'z' + 1 = 'a': charCode - 97 + 1 % 26 + 97
    return results;
  } else {
    return char;
  }
}
function vowelCase(char) {
  if (char.match(/^[aeiou]$/i) !== null) {
    return char.toUpperCase();
  } else {
    return char;
  }
}
console.log(LetterChanges("ab?cde"));
console.log(LetterChanges("z"));
console.log(vowelCase("a"));
