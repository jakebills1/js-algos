const arr = [1, 6, 8, 3, 5];
function double(num){
  return num * 2;
}
var obj = {};
for ( var i = 0; i < arr.length; i++){
  var key = arr[i];
  var value = double(arr[i]);
  obj[key] = value;
}
console.log(Object.values(obj))
console.log(Object.keys(obj))
