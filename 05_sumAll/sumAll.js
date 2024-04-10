const sumAll = function(userNumber1, userNumber2) {

  if (typeof userNumber1 !== "number" || typeof userNumber2 !== "number" || userNumber1 < 0 || userNumber2 < 0) {
    return "ERROR"
  }

  let min,
  max;
  if (userNumber1 > userNumber2){
    min = userNumber2;
    max = userNumber1;
  } else {
    min = userNumber1;
    max = userNumber2;
  }

  let numbersToAdd = [];
  for (let i = min; i <= max; i++) {
    numbersToAdd.push(i);
  }

  let sum = 0;
  numbersToAdd.forEach(num => {
    sum += num;
  })
  return sum;
}




// Do not edit below this line
module.exports = sumAll;
