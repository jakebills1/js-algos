function myFilter(arr, callback) {
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      results.push(arr[i]);
    }
  }
  return results;
}
console.log(
  myFilter([1, 2, 3, 4], function(n) {
    return n % 2 === 0;
  })
);
