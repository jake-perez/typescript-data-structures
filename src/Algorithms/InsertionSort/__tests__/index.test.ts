import sortFn from '../InsertionSort';

describe('Insertion Sort', () => {
  it('should sort an unsorted array', () => {
    const arr: number[] = [4, 2, 7, 4, 8, 9, 0, 12];

    const result: number[] = sortFn.insertionSort(arr);

    expect(result).toEqual([0, 2, 4, 4, 7, 8, 9, 12]);
  });
});
