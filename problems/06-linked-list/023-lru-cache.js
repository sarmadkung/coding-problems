/**
 * 023 — LRU Cache
 * Difficulty: Medium   ·   Topic: Linked List
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Design a Least Recently Used cache with a fixed positive capacity.
 *   get(key) returns the value or -1; put(key, value) inserts or updates, evicting the
 *   least recently used key when over capacity. Both must run in O(1) average time.
 *
 * CONSTRAINTS
 *   1 <= capacity <= 3000
 *   0 <= key <= 10^4, 0 <= value <= 10^5
 *   At most 2 * 10^5 calls to get and put.
 *
 * API
 *   new LRUCache(capacity)             initialize the cache with a positive capacity
 *   get(key)                -> number  return the value for key, or -1 if it is absent
 *   put(key, value)         -> void    insert or update key; evict the least recently used key if
 *                                      over capacity
 *
 * EXAMPLES
 *   const c = new LRUCache(2);
 *   c.put(1, 1); c.put(2, 2); c.get(1)  ->  1
 *   c.put(3, 3);            // evicts key 2
 *   c.get(2)  ->  -1
 *
 * EDGE CASES
 *   - A `get` counts as a use and refreshes recency.
 *   - Updating an existing key also refreshes it and must not grow the size.
 *   - Capacity of 1.
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * COMPLEXITY
 *   Naive:  O(n) per operation — an array scanned for the oldest entry.
 *   Target: O(1) per operation — a hash map to nodes of a doubly linked list (or exploit JS Map
 *           insertion order).
 * ----------------------------------------------------------------------
 */

class LRUCache {
  // TODO: your solution here
}

module.exports = { LRUCache };
