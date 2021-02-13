const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let result = Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / ( 0,693 / HALF_LIFE_PERIOD ));
  
  if (dateSample.arguments.lenght == 0 || typeof(sampleActivity) != 'string' || result <= 0 || !isFinite(result))
    return false;
  else return result; 
};
