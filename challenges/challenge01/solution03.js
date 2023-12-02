const test = [2, 1, 3, 5, 3, 2];
const test2 = [1, 2, 3, 4];
const test3 = [5, 1, 5, 1];

const findFirstRepeated = gifts => {
  let data = new Set();

  for (let number of gifts) {
    if (data.has(number)) {
      return number;
    }
    data.add(number);
  }

  return -1;
};

console.log(findFirstRepeated(test));

console.log(findFirstRepeated(test2));

console.log(findFirstRepeated(test3));
