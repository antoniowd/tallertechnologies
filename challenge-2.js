// Sorted Squared Array

function sortedSquared(data) {
  const result = [];
  for (let item of data) {
    result.push(item * item);
  }
  result.sort((a, b) => a - b);
  return result;
}

console.log(sortedSquared([1, 2, 3, 5, 6, 8, 9])); // expected [1, 4, 9, 25, 36, 64, 81]
console.log(sortedSquared([-2, -1])); // expected [1, 4]
console.log(sortedSquared([-10, -5, 0, 5, 10])); // expected [0, 25, 25, 100, 100]
