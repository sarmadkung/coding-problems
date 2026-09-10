/**
 * 140 — Design Circular Queue
 * Difficulty: Medium   ·   Topic: Queues & Design
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Design a circular queue of fixed capacity: enQueue(value), deQueue(), Front(), Rear(),
 *   isEmpty() and isFull(). The unused space in front of the queue must be reusable.
 *
 * CONSTRAINTS
 *   1 <= k <= 1000
 *   0 <= value <= 1000
 *   At most 3000 calls are made.
 *
 * EXAMPLES
 *   const q = new MyCircularQueue(3);
 *   q.enQueue(1)  ->  true
 *   q.enQueue(2); q.enQueue(3);
 *   q.enQueue(4)  ->  false   // full
 *   q.deQueue();  q.enQueue(4)  ->  true   // space reused
 *
 * EDGE CASES
 *   - Distinguishing full from empty when head equals tail — keep a size counter.
 *   - Front and Rear on an empty queue return -1.
 *   - Indices wrap with modulo capacity.
 *
 * COMPLEXITY
 *   Naive:  Shifting all elements on dequeue is O(n) per operation.
 *   Target: O(1) per operation — a fixed array with head and tail indices advanced modulo capacity, plus a size field.
 * ----------------------------------------------------------------------
 */

class MyCircularQueue {
  // TODO: your solution here
}

module.exports = { MyCircularQueue };
