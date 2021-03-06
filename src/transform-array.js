const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
      if ((i + 1) == arr.length) break;
      i++;
    }
    else if (arr[i] == '--double-next') {
      if ((i+1) == arr.length) break;
      newArr.push(arr[i+1]);    
    }
    else if (arr[i] == '--discard-prev') {
      if (arr[i-2] == '--discard-next') continue;
      if (i == 0) continue;
      newArr.pop();
    }
    else if (arr[i] == '--double-prev') {
      if (i == 0) continue;
      if (arr[i-2] == '--discard-next') continue;
      newArr.push(arr[i-1]);
    }
    else newArr.push(arr[i]);
  }
  return newArr;
};
