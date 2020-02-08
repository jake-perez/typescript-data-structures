export default class Queue<T> {
  public queueArray: T[] = [];

  public enqueue = (value: T): void => {
    this.queueArray.push(value);
  };

  public dequeue = (): T | Error => {
    const value: T | undefined = this.queueArray.shift();
    if (value === undefined) {
      throw new Error('Empty Queue');
    }
    return value;
  };
}
