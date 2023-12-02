const test = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';

const test2 = ['juego', 'puzzle'];
const materials2 = 'jlepuz';

const test3 = ['libro', 'ps5'];
const materials3 = 'psli';

const manufacture = (gifts, materials) => {
  const regex = new RegExp(`^[${materials}]+${'$'}`);
  return gifts.filter(regex.test.bind(regex));
};

console.log(manufacture(test, materials));
console.log(manufacture(test2, materials2));
console.log(manufacture(test3, materials3));
