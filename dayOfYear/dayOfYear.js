var dayOfYear = function(date) {
  if (
    date.match(
      /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/
    ) === null
  ) {
    throw "date must be in YYYY-MM-DD format, between 1900-01-01 and 2099-12-31";
  }
  var countOfDays = 0;
  var dateObject = {
    year: date.slice(0, 4),
    month: date.slice(5, 7),
    day: date.slice(8)
  };
  var daysInYear = isLeapYear(dateObject.year);
  var daysInMonths = [
    31,
    daysInYear === 366 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ];
  // countOfDays = (count of every month leading up to current month) + ( date in current month)
  if (parseInt(dateObject.month) > 1) {
    for (var i = 0; i < parseInt(dateObject.month) - 1; i++) {
      countOfDays += daysInMonths[i];
    }
    countOfDays += parseInt(dateObject.day);
  } else {
    countOfDays = parseInt(dateObject.day);
  }

  return countOfDays;
};
var isLeapYear = function(year) {
  let nonLeapYear = 365;
  let LeapYear = 366;
  year = parseInt(year);
  // is leap year if year is evenly divisible by 4. if it is divisible by 100, it must also be divisible by 400.
  if (year % 4 === 0) {
    if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
      return LeapYear;
    }
  }
  return nonLeapYear;
};
dayOfYear("2019-01-09");
module.exports = {
  getDayOfYear: dayOfYear,
  isLeapYear: isLeapYear
};
