// Non-Constructible Change

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let change = 0;
  for (let coin of coins) {
    const nextChange = change + 1;
    if (coin > nextChange) {
      return nextChange;
    }  
    change += coin;
  }

  return change + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])); // expected 20
console.log(nonConstructibleChange([1, 1, 1, 1, 1])); // expected 6
console.log(nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100])); // expected 55
