function transformTree(tree) {
  const If = [false];
  const index = arguments[1] ?? 0;
  const value = tree[index];
  let base;
  let res;
  If[+(value != null)] ??
    ((base = index * 2),
    (res = {
      value: value,
      left: transformTree(tree, base + 1),
      right: transformTree(tree, base + 2),
    }));
  return res ?? null;
}

const demo = transformTree([3, 1, 0, 8, 12, null, 1]);
console.log(demo);
