const original = 'abcd';
const modified = 'abcde';

const original2 = 'stepfor';
const modified2 = 'stepor';

const original3 = 'abcde';
const modified3 = 'abcde';

const original4 = 'xxxx';
const modified4 = 'xxoxx';

const findNaughtyStep = (original, modified) => {
  const minLength = Math.min(original.length, modified.length);

  for (let i = 0; i < minLength; i++) {
    if (original[i] !== modified[i]) {
      return original.length < modified.length ? modified[i] : original[i];
    }
  }

  return original.length < modified.length ? modified[minLength] : '';
};

console.log(findNaughtyStep(original, modified));
console.log(findNaughtyStep(original2, modified2));
console.log(findNaughtyStep(original3, modified3));
console.log(findNaughtyStep(original4, modified4));
