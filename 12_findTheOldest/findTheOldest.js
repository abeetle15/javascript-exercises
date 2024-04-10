const findTheOldest = function(array) {
  let alivePeopleAge = array.forEach(person => {
    const currentYear = new Date().getFullYear();
    if (!person.yearOfDeath) {
      person.yearOfDeath = currentYear;
    }
  });
  let addAgeToArray = array.forEach(person => {
  person.age = person.yearOfDeath - person.yearOfBirth;    
  });
  let findOldest = array.reduce((previousPerson, currentPerson) => {
    if (currentPerson.age > previousPerson.age) { 
      return currentPerson;
    }
    return previousPerson;
  },)
  return findOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
