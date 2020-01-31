import { add } from '..';

describe('Test Add Function', () => {
  it('should add two numbers', () => {
    const result: number = add(2, 4);

    expect(result).toEqual(6);
  });
});
