const reverseString = function(word) {
  let chars = word.split('');
  console.log(chars);
  let invArray = [""];
  for (let i = 0; i < word.length; i++) {
    invArray += chars[(i - (word.length - 1)) * -1];
  }
 
  return invArray;
};

// Do not edit below this line
module.exports = reverseString;
