function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (const val of intervals) {
    const [start, end] = val;
    const max = result[result.length - 1][1];

    start > max
      ? result.push(val)
      : (result[result.length - 1][1] = Math.max(end, max));
  }

  return result;
}

optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4],
]); // [[2, 8]]

optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6],
]); // [[1, 6], [8, 10]]

optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6],
]); // [[1, 2], [3, 4], [5, 6]]
