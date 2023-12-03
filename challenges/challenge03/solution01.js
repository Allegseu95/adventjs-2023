const original = 'abcd';
const modified = 'abcde';

const original2 = 'stepfor';
const modified2 = 'stepor';

const original3 = 'abcde';
const modified3 = 'abcde';

const original4 = 'xxxx';
const modified4 = 'xxoxx';

const findNaughtyStep = (original, modified) => {
  let principal = original;
  let compare = modified;

  if (original.length < modified.length) {
    principal = modified;
    compare = original;
  }

  return principal.split('').find((ch, index) => ch !== compare[index]) ?? '';
};

console.log(findNaughtyStep(original, modified));
console.log(findNaughtyStep(original2, modified2));
console.log(findNaughtyStep(original3, modified3));
console.log(findNaughtyStep(original4, modified4));
