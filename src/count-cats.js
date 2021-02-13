const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let newMatrix = [];
  
  matrix.forEach((element, index) => {
    newMatrix = newMatrix.concat(element);
  });  
  
  let cats = [];

  cats = newMatrix.filter(element => element == '^^');

  return cats.length;
}

