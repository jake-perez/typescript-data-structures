import Node from '../Node';

export default class StackLL<T> {
  public head: null | Node<T>;
  public count: number;

  constructor() {
    this.head = null;
    this.count = 0;
  }

  public add = (value: T) => {
    if (!this.head) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const oldHead: Node<T> = this.head;
      this.head = new Node(value);
      this.head.next = oldHead;
    }
    this.count++;
  };

  public size = () => this.count;

  public pop = () => {
    if (!this.head) {
      throw new Error('No more elements on stack');
    }
    const value: T = this.head.value;
    this.head = this.head.next;
    this.count--;
    return value;
  };
}
