Array.prototype.average = function () { 
  var average = ( this.reduce(function(memo, n) { return memo + n}) ) / this.length;
  return average;
}
var arr = [5,3,7,8,5,2];
console.log(arr.average());