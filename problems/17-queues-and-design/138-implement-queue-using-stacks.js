/**
 * 138 — Implement Queue using Stacks
 * Difficulty: Easy   ·   Topic: Queues & Design
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Implement a FIFO queue using only two stacks. Support push(x), pop(), peek() and
 *   empty(). You may only use standard stack operations.
 *   Each operation should be O(1) AMORTISED.
 *
 * CONSTRAINTS
 *   1 <= x <= 9
 *   At most 100 calls are made.
 *   pop and peek are only called on a non-empty queue.
 *
 * EXAMPLES
 *   const q = new MyQueue();
 *   q.push(1); q.push(2);
 *   q.peek()   ->  1
 *   q.pop()    ->  1
 *   q.empty()  ->  false
 *
 * EDGE CASES
 *   - Moving every element on each operation gives O(n), not amortised O(1).
 *   - Only transfer from the input stack to the output stack when the output stack is EMPTY.
 *   - Each element is moved at most once, which is what makes it amortised O(1).
 *
 * COMPLEXITY
 *   Naive:  O(n) per operation — shuttle all elements between the stacks on every push or pop.
 *   Target: O(1) amortised — an input stack for pushes and an output stack for pops, refilled only when it runs empty.
 * ----------------------------------------------------------------------
 */

class MyQueue {
  // TODO: your solution here
}

module.exports = { MyQueue };
