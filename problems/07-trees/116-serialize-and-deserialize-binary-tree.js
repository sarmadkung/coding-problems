/**
 * 116 — Serialize and Deserialize Binary Tree
 * Difficulty: Hard   ·   Topic: Trees
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Design an algorithm to serialize a binary tree to a string and deserialize that string
 *   back into the identical tree. There is no restriction on the format you choose.
 *
 * CONSTRAINTS
 *   The tree holds 0 to 10^4 nodes.
 *   -1000 <= Node.val <= 1000
 *
 * EXAMPLES
 *   serialize([1, 2, 3, null, null, 4, 5])  ->  e.g. "1,2,#,#,3,4,#,#,5,#,#"
 *   deserialize(that string)  ->  a tree identical to the original
 *   serialize(null)  ->  a string that deserializes back to null
 *
 * EDGE CASES
 *   - An empty tree must round-trip correctly.
 *   - Null children MUST be encoded, or the shape is ambiguous.
 *   - Negative values mean you cannot use '-' as a separator.
 *
 * COMPLEXITY
 *   Naive:  Storing only the values without null markers loses the structure — the tree cannot be rebuilt.
 *   Target: O(n) for both directions — a pre-order walk emitting a sentinel for null, rebuilt by consuming the tokens in the same order.
 * ----------------------------------------------------------------------
 */

class Codec {
  // TODO: your solution here
}

module.exports = { Codec };
