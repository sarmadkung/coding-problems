/**
 * 015 — Min Stack
 * Difficulty: Medium   ·   Topic: Stack
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Design a stack supporting push, pop, top and retrieving the minimum element,
 *   EVERY operation in O(1) time.
 *   Implement the MinStack class with push(val), pop(), top() and getMin().
 *
 * CONSTRAINTS
 *   -2^31 <= val <= 2^31 - 1
 *   pop, top and getMin are only called on a non-empty stack.
 *   At most 3 * 10^4 calls are made.
 *   getMin must run in O(1) time.
 *
 * API
 *   new MinStack()             initialize an empty stack
 *   push(val)       -> void    push val onto the stack
 *   pop()           -> void    remove the element on top of the stack
 *   top()           -> number  return the element on top of the stack
 *   getMin()        -> number  return the minimum element currently in the stack
 *
 * EXAMPLES
 *   const st = new MinStack();
 *   st.push(-2); st.push(0); st.push(-3);
 *   st.getMin()  ->  -3
 *   st.pop(); st.top()  ->  0;  st.getMin()  ->  -2
 *
 * EDGE CASES
 *   - Duplicate minimums must survive a single pop.
 *   - Negative values.
 *
 * -------------------------- SPOILERS BELOW --------------------------
 *
 * COMPLEXITY
 *   Naive:  O(n) getMin — scan the whole stack on every call.
 *   Target: O(1) for every operation — keep a parallel stack (or store [val, minSoFar] pairs) so
 *           each entry carries the minimum beneath it.
 * ----------------------------------------------------------------------
 */

class MinStack {
  // TODO: your solution here
}

module.exports = { MinStack };
