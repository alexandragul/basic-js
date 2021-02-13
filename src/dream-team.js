const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let newArray = [];
  members.forEach((element, index, array) => {
    if (typeof(element) == 'string')
      newArray.push(element);
  })

  let firstLetters = [];
  firstLetters = newArray.map(value => value.trim()).map(value => value[0]);

  let sortedLetters = firstLetters.join('').toUpperCase().split('').sort().join('');

  return sortedLetters;
};
