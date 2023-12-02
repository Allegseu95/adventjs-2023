const test = [2, 1, 3, 5, 3, 2];
const test2 = [1, 2, 3, 4];
const test3 = [5, 1, 5, 1];

const findFirstRepeated = gifts => {
  if (!gifts || !Array.isArray(gifts)) {
    return -1;
  }

  const total = {};

  let counter = 0;

  gifts.forEach(item => {
    if (!total[item]) {
      total[item] = { value: item, count: 0, order: counter };
    } else {
      total[item].count++;
      counter++;
      total[item].order = counter;
    }
  });

  return (
    Object.values(total)
      .sort((a, b) => a.order - b.order)
      .filter(item => item.count > 0)
      .map(item => item.value)[0] ?? -1
  );
};

console.log(findFirstRepeated(test));

console.log(findFirstRepeated(test2));

console.log(findFirstRepeated(test3));
