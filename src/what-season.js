const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (getSeason.arguments.length == 0) 
    return 'Unable to determine the time of year!';

  let month = date.getMonth();
  let winterMonth = [0, 1, 11];
  let springMonth = [2, 3, 4];
  let summerMonth = [5, 6, 7];
  let autumnMonth = [8, 9, 10];

  if (winterMonth.includes(month)) return 'winter';
  else if (springMonth.includes(month)) return 'spring';
  else if (summerMonth.includes(month)) return 'summer';
  else if (autumnMonth.includes(month)) return /autumn|fall/; 
};
