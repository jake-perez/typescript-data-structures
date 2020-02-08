import Node from '..';

describe('Node', () => {
  it('should create a single node (number)', () => {
    const node = new Node(3);

    expect(node.value).toEqual(3);
    expect(node.next).toEqual(null);
  });

  it('should create a single node (string)', () => {
    const node = new Node('hello');

    expect(node.value).toEqual('hello');
    expect(node.next).toEqual(null);
  });

  it('should connect two string nodes', () => {
    const first = new Node('hello');
    const second = new Node(' world');
    first.next = second;

    expect(first.value + first.next.value).toEqual('hello world');
  });
});
