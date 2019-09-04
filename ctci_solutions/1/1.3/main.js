function url_ify(str) {
  var arr = str.trim().split(" ");
  var results_arr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i - 1]) {
      results_arr.push("%20");
      results_arr.push(arr[i]);
    } else {
      results_arr.push(arr[i]);
    }
  }
  return results_arr.join("");
}
module.exports = url_ify;
/*
 * write a function that takes a string a returns a copy of said string with white space between words replaced with "%20"
 * method:
 * 1. trim and split string to array
 * 2. iterate over array
 * 3. if array item is not the first or last item, push %20 to new arr, then original array item
 * 4. join new array then return that array
 */
