const test = [2, 1, 3, 5, 3, 2];
const test2 = [1, 2, 3, 4];
const test3 = [5, 1, 5, 1];

const findFirstRepeated = gifts =>
  gifts.filter((item, i) => gifts.indexOf(item) !== i)?.[0] ?? -1;

console.log(findFirstRepeated(test));

console.log(findFirstRepeated(test2));

console.log(findFirstRepeated(test3));
