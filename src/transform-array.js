const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  arr.forEach((item, index, array) => {
    
    if (item == '--discard-next') {

      if (index == array.length)
        array.splice(index, 1);

      else array.splice(index, 1);
    }

    if (item == '--double-next') {

      if (index == array.length)
        array.splice(index, 1);

      else array.splice(index, 1);
    }

    if (item == '--discard-prev') {

      if (index == 0)
        array.splice(0, 1);

      else array.splice(index - 1, 1);
    }

    if (item == '--double-prev') {

      if (index == 0)
        array.splice(0, 1);
        
      else array.splice(index - 1, 1, array[index - 1]);
    }
  });

  return arr;
};
