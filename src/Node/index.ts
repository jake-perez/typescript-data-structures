export default class Node<T> {
  public value: T;
  public next: null | Node<T>;

  constructor(arg: T) {
    this.value = arg;
    this.next = null;
  }
}
