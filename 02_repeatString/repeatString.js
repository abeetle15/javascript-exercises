const repeatString = function(str, num) {
  let finalText = ''; 
  for (let i = 1; i <= num; i++) {
    finalText += str;
  }
  if (num < 0) {
    return 'ERROR';
  } else {
  return finalText;}
};




// Do not edit below this line
module.exports = repeatString;
