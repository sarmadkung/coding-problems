/**
 * 141 — Flatten Nested List Iterator
 * Difficulty: Medium   ·   Topic: Queues & Design
 * ----------------------------------------------------------------------
 * PROBLEM
 *   You are given a nested list of integers, where each element is either an integer or a
 *   list whose elements are also integers or lists.
 *   Implement an iterator with next() and hasNext() that flattens it.
 *
 * CONSTRAINTS
 *   1 <= nestedList.length <= 500
 *   Integer values are in the range [-10^6, 10^6].
 *
 * EXAMPLES
 *   const it = new NestedIterator([[1, 1], 2, [1, 1]]);
 *     iterating gives  ->  [1, 1, 2, 1, 1]
 *   new NestedIterator([1, [4, [6]]])  ->  [1, 4, 6]
 *
 * EDGE CASES
 *   - Empty nested lists contribute nothing and must be skipped.
 *   - Nesting can be arbitrarily deep.
 *   - hasNext() may need to descend through several empty lists before answering.
 *
 * COMPLEXITY
 *   Naive:  Flattening everything eagerly in the constructor is simple but defeats the purpose of an iterator and costs O(n) memory up front.
 *   Target: O(1) amortised per next() — a stack of iterators or reversed elements, unwrapping lists lazily only when hasNext() is called.
 * ----------------------------------------------------------------------
 */

class NestedIterator {
  // TODO: your solution here
}

module.exports = { NestedIterator };
