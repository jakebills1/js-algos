function sorted(arr) {
  // an empty array, or array of 1 elements is considered sorted
  if (arr.length <= 1){
    return true;
  }
  else {
    // for each pair of elements in the array, starting from the last, check if arr[i - 1] is bigger than arr[i], if arr[i - 1] is bigger return false
    for (var i = arr.length - 1; i > 0; i--){
      if (arr[i - 1] > arr[i]){
        return false
      }
    } 
  }
  return true;
}
function sort(arr) {
// (1) Loop through the whole array starting from index 1
// (2) If the number in the array at index i-1 is greater than i, swap the numbers and continue
// (3) Once the end of the array is reached, start looping again from the beginning
// (3) Once no more elements can be swapped, the sorting is complete
  while (!sorted(arr)){
    for ( var i = 1; i < arr.length; i++){
      // if the pair of elements are out of order
      if (arr[i - 1] > arr[i]){
        // swap
        var tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr;
}
var sortedArr = [1,2,3,5,8,9];
var arr = [1,5,2,7,5];
// testcases for sorted()
// console.log(sorted(arr));
// console.log(sorted(sortedArr));
console.log(sort(arr));