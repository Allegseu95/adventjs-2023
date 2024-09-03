function checkIsValidCopy(original, copy) {
  let i = 0;
  const arr = '#+:. ';
  let ret = 1;
  for (let a of original) {
    const b = copy[i];
    const ai = arr.indexOf(a);
    const bi = arr.indexOf(b);
    const found = (ai !== -1) | (bi !== -1);
    const ok =
      (a === b) |
      (!found & (b?.charCodeAt() - a?.charCodeAt() === 32)) |
      (found & (bi >= ai));

    ret *= ok;
    i++;
  }
  return !!ret;
}

checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#'); // true
checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#'); // false (due to the initial p)
checkIsValidCopy('Santa Claus', 's#+:. c:. s'); // true
checkIsValidCopy('Santa Claus', 's#+:.#c:. s'); // false (there is a # where it shouldn't be)
