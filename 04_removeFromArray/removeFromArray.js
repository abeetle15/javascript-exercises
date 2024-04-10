const removeFromArray = function(userArray, ...removedObjects) {
  let outputArray = userArray;
  for (let i of removedObjects) {
    let index = userArray.indexOf(i);
    if (index < 0) {continue}
    outputArray.splice(index, 1);
    let index2 = outputArray.indexOf(i);
    if (index2 < 0) {continue}
    outputArray.splice(index2, 1);
  }

    return outputArray;
  
  
};

// Do not edit below this line
module.exports = removeFromArray;
