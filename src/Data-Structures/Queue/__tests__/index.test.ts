import QueueArray from '../QueueArray';

describe('Queue', () => {
  it('should test queue array', () => {
    const queue: QueueArray<number> = new QueueArray<number>();

    queue.enqueue(5);
    const t = () => queue.dequeue();

    expect(queue.dequeue()).toEqual(5);
    expect(t).toThrowError('Empty Queue');
  });
});
