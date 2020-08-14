export const arrSum = (arr: Array<number>) =>
  arr.reduce((sum, value) => value + sum, 0);

export const arrAvg = (arr: Array<number>) => arrSum(arr) / arr.length;

export const arrCount = (
  arr: Array<number>,
  { divisions, min, max }: { divisions?: number; min?: number; max?: number }
) => {
  divisions = divisions || 10;
  if (min == undefined) min = Math.min(...arr);
  if (max == undefined) max = Math.max(...arr) + 0.0001;
  let counts = Array.from(Array(divisions), (_, x) => ({x:0, y:0}));
  let step = (max - min) / divisions;
  counts.forEach((count, i) => count.y = ((i+0.5)*step + min))
  arr.forEach((el) => {
    if (el > max || el < min) return
    let index = Math.floor((el - min) / step);
    counts[index].x += 1;
  });
  return counts;
};
