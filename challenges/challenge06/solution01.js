function maxDistance(movements) {
  let distance = 0;

  let right = movements.match(/>/g)?.length ?? 0;
  let left = movements.match(/</g)?.length ?? 0;

  distance += right;
  distance -= left;

  let extra = movements.length - (right + left);

  return Math.abs(distance) + extra;
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
