const test = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';

const test2 = ['juego', 'puzzle'];
const materials2 = 'jlepuz';

const test3 = ['libro', 'ps5'];
const materials3 = 'psli';

const manufacture = (gifts, materials) => {
  return gifts.filter(item =>
    item.split('').every(letter => materials.includes(letter))
  );
};

console.log(manufacture(test, materials));
console.log(manufacture(test2, materials2));
console.log(manufacture(test3, materials3));
