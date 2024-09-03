function maxDistance(movements) {
  const left = movements.match(/</g)?.length ?? 0;
  const right = movements.match(/>/g)?.length ?? 0;
  return Math.abs(right - left) + movements.length - (right + left);
}

const movements = '>>*<';
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = '<<<>';
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = '>***>';
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
