const insertionSort = (array: number[]): number[] => {
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1, k = i; j >= 0; j--) {
      if (isLess(array[k], array[j])) {
        swap(array, k--, j);
      }
    }
  }
  return array;
};

const isLess = (a: number, b: number): boolean => a <= b;

const swap = (arr: number[], i: number, j: number): void => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

export default { insertionSort, isLess, swap };
