export const arrSum = (arr: Array<number>) =>
  arr.reduce((sum, value) => value + sum, 0);

export const arrAvg = (arr: Array<number>) => arrSum(arr) / arr.length;
