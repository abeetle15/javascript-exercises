const palindromes = function (string) {
  let allCharacters = string.split('');
  let cleanArray = [];
  let testLetters = /^[a-zA-Z]+$/;
  let testNumbers = /(\d+)/;
  allCharacters.forEach(character => {
    if (character.match(testNumbers) || character.match(testLetters)) {
      cleanArray.push(character);
    }
  });
  let cleanString = cleanArray.join("").toLowerCase();
  let invertedString = cleanArray.reverse().join("").toLowerCase();
  return cleanString === invertedString;
  
};

// Do not edit below this line
module.exports = palindromes;
