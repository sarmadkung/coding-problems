/**
 * 031 — Clone Graph
 * Difficulty: Medium   ·   Topic: Graphs
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given a reference to a node in a connected undirected graph, return a deep copy of
 *   the entire graph. A node is { val, neighbors }.
 *
 * CONSTRAINTS
 *   The graph holds 0 to 100 nodes.
 *   1 <= Node.val <= 100, unique per node.
 *   The graph is connected and has no repeated edges or self-loops.
 *
 * EXAMPLES
 *   cloneGraph(node1 of [[2,4],[1,3],[2,4],[1,3]])  ->  an identical, disjoint graph
 *   cloneGraph(a single node with no neighbours)     ->  a copy of it
 *   cloneGraph(null)                                 ->  null
 *
 * EDGE CASES
 *   - Empty graph.
 *   - Cycles — without a visited map you recurse forever.
 *   - The clone must share no node objects with the original.
 *
 * COMPLEXITY
 *   Naive:  Copying without a map either loops infinitely or duplicates shared nodes.
 *   Target: O(V + E) time, O(V) space — DFS or BFS with an `original -> clone` map, created before recursing into neighbours.
 * ----------------------------------------------------------------------
 */

function cloneGraph(node) {
  // TODO: your solution here
}

module.exports = { cloneGraph };
