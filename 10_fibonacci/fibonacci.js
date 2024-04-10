const fibonacci = function(numberRequested) {
  let fibSeq = [1, 1];
if (typeof numberRequested !== 'number') {
  parseInt(numberRequested);
}
  for (let i = 2; i <= numberRequested; i++) {
    let newFib = fibSeq[i - 1] + fibSeq[i - 2];
    fibSeq.push(newFib);
  }
  if (numberRequested == 0) {return 0};
  if (numberRequested < 0) {return 'OOPS'}
  return fibSeq[numberRequested - 1];
};

// Do not edit below this line
module.exports = fibonacci;
