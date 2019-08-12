function KaprekarsConstant(num) {
  const KAP = 6174;
  var numOfTimestoReachConstant = 1;
  var answer = calculate(num);
  while (answer !== KAP) {
    numOfTimestoReachConstant++;
    var newInput = answer;
    answer = calculate(newInput);
  }
  return numOfTimestoReachConstant;
}
function calculate(num) {
  var arr = num.toString().split("");
  var copiedArr = [...arr];
  var asc = parseInt(
    arr
      .sort(function(a, b) {
        return a - b;
      })
      .join("")
  );
  var dsc = parseInt(
    copiedArr
      .sort(function(a, b) {
        return b - a;
      })
      .join("")
  );
  var answer = parseInt(asc) > parseInt(dsc) ? asc - dsc : dsc - asc;
  if (answer < 1000) {
    answer = answer.toString().padStart(4, "0");
  }
  return answer;
}
// ============ passed test case
// console.log(KaprekarsConstant(1234));
// console.log(KaprekarsConstant(5078));
// console.log(KaprekarsConstant(2111));
