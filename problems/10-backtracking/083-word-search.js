/**
 * 083 — Word Search
 * Difficulty: Medium   ·   Topic: Backtracking
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an m x n grid of characters and a string `word`, return true if the word can be
 *   built from sequentially adjacent cells (horizontal or vertical neighbours).
 *   The same cell may not be used more than once.
 *
 * CONSTRAINTS
 *   m == board.length, n == board[i].length
 *   1 <= m, n <= 6
 *   1 <= word.length <= 15
 *   board and word consist of English letters.
 *
 * EXAMPLES
 *   exist([["A","B"],["C","D"]], "AB")   ->  true
 *   exist([["A","B"],["C","D"]], "ABD")  ->  false  // B and D are adjacent, A and B... trace it
 *   exist([["A"]], "A")                  ->  true
 *
 * EDGE CASES
 *   - A cell cannot be reused within one path — mark and UNMARK it as you backtrack.
 *   - Diagonal moves are not allowed.
 *   - A word longer than the cell count is immediately false.
 *
 * COMPLEXITY
 *   Naive:  Trying every cell sequence without pruning is factorial in the grid size.
 *   Target: O(m * n * 4^L) time — DFS from every matching start cell, marking visited cells and restoring them on the way out.
 * ----------------------------------------------------------------------
 */

function exist(board, word) {
  // TODO: your solution here
}

module.exports = { exist };
