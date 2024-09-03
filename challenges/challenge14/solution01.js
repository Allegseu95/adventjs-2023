function maxGifts(houses) {
  let incl = 0;
  let excl = 0;
  let excl_new;

  for (let house of houses) {
    excl_new = [excl, incl][+(incl > excl)];

    incl = excl + house;
    excl = excl_new;
  }

  return [excl, incl][+(incl > excl)];
}

console.log(maxGifts([2, 4, 2])); // 4 (4)
console.log(maxGifts([5, 1, 1, 5])); // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])); // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])); // 103 (3 + 100)
