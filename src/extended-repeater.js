const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
if (str === null) 
    str = 'null';
  if (options.addition === null) 
    options.addition = 'null';
  let string = [];

  let repeatTimes;
  let separator;
  let addition;
  let additionRepeatTimes;

  if (options.repeatTimes == undefined) repeatTimes = 1;
  else repeatTimes = options.repeatTimes;

  if ((options.separator == undefined)) separator = "+";
  else separator = options.separator;

  if (options.addition == undefined) addition = "";
  else addition = options.addition;

  if (options.additionSeparator == undefined && options.addition == undefined) {
    additionSeparator = "";
    addition = "";
  } else if (
    options.additionSeparator == undefined &&
    options.addition != undefined
  ) {
    additionSeparator = "|";
    addition = options.addition;
  } else {
    additionSeparator = options.additionSeparator;
    addition = options.addition;
  }

  if (options.additionRepeatTimes == undefined)
    additionRepeatTimes = 1;
  else additionRepeatTimes = options.additionRepeatTimes;

  for (let i = 0; i < repeatTimes - 1; i++) {
    string.push(str);

    for (let i = 0; i < additionRepeatTimes - 1; i++) {
      string.push(addition + additionSeparator);
    }
    string.push(addition);

    string.push(separator);
  }
  string.push(str);
  for (let i = 0; i < additionRepeatTimes - 1; i++) {
    string.push(addition + additionSeparator);
  }
  string.push(addition);
  
  return string.join("");
};
  
