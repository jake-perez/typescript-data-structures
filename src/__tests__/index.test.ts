import DataStructures from '../Data-Structures';

describe('Data Structures', () => {
  it('should expose all data structures', () => {
    expect(Object.keys(DataStructures).sort()).toEqual(
      ['Node', 'StackLL'].sort(),
    );
  });
});
