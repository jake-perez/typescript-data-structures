import StackLL from '../StackLL';

describe('Stack Linked List', () => {
  it('should add items to a stack', () => {
    const values: number[] = [1, 2, 3, 4, 5];
    const strings: string[] = ['hi', 'wassup'];

    const stringStack = new StackLL();
    const numberStack = new StackLL();

    values.forEach((val: number) => numberStack.add(val));
    strings.forEach((val: string) => stringStack.add(val));

    expect(numberStack.size()).toEqual(5);
    expect(stringStack.size()).toEqual(2);
  });

  it('should pop items from a stack', () => {
    const values: number[] = [1, 2, 3, 4, 5];
    const numberStack = new StackLL();
    values.forEach((val: number) => numberStack.add(val));

    expect(numberStack.pop()).toEqual(5);
    expect(numberStack.pop()).toEqual(4);
    expect(numberStack.pop()).toEqual(3);
  });

  it('should throw an error if popping an empty stack stack', () => {
    const values: number[] = [1, 2];
    const numberStack = new StackLL();
    values.forEach((val: number) => numberStack.add(val));

    numberStack.pop();
    numberStack.pop();

    const t = () => numberStack.pop();
    expect(t).toThrowError();
  });
});
