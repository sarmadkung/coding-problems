/**
 * 139 — Design HashMap
 * Difficulty: Easy   ·   Topic: Queues & Design
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Design a HashMap without using any built-in hash table library.
 *   Support put(key, value), get(key) returning -1 if absent, and remove(key).
 *
 * CONSTRAINTS
 *   0 <= key, value <= 10^6
 *   At most 10^4 calls are made.
 *
 * EXAMPLES
 *   const m = new MyHashMap();
 *   m.put(1, 1); m.put(2, 2);
 *   m.get(1)  ->  1
 *   m.get(3)  ->  -1
 *   m.remove(2); m.get(2)  ->  -1
 *
 * EDGE CASES
 *   - A missing key returns -1, not undefined.
 *   - put on an existing key updates rather than duplicating.
 *   - Collisions must be handled — this is the point of the exercise.
 *
 * COMPLEXITY
 *   Naive:  A single array of size 10^6 works here but does not generalise and wastes memory.
 *   Target: O(1) average — an array of buckets indexed by hash, each bucket a list handling collisions by chaining.
 * ----------------------------------------------------------------------
 */

class MyHashMap {
  // TODO: your solution here
}

module.exports = { MyHashMap };
