function maxDistance(movements) {
  let left = 0;
  let right = 0;
  let ast = 0;
  movements.split('').forEach(x => {
    if ('<' == x) left++;
    else if ('>' == x) right++;
    else ast++;
  });
  return left > right ? left + ast - right : right + ast - left;
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
