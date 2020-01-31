import DataStructures from '..';

describe('Data Structures', () => {
  it('should expose all data structures', () => {
    expect(Object.keys(DataStructures).sort()).toEqual(
      ['Node', 'StackLL'].sort(),
    );
  });
});
