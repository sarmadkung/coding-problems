/**
 * 137 — Game of Life
 * Difficulty: Medium   ·   Topic: Matrix
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an m x n board of 1 (live) and 0 (dead) cells, compute the next state under
 *   Conway's rules: a live cell with fewer than 2 or more than 3 live neighbours dies, a
 *   live cell with 2 or 3 survives, and a dead cell with exactly 3 becomes live.
 *   All cells update SIMULTANEOUSLY, and you should do it in place.
 *
 * CONSTRAINTS
 *   m == board.length, n == board[i].length
 *   1 <= m, n <= 25
 *   board[i][j] is 0 or 1.
 *
 * EXAMPLES
 *   gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])
 *     ->  [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
 *   gameOfLife([[1, 1], [1, 0]])  ->  [[1, 1], [1, 1]]
 *
 * EDGE CASES
 *   - Updates are simultaneous — writing directly corrupts later neighbour counts.
 *   - Cells on the border have fewer than 8 neighbours.
 *   - Neighbours include all 8 directions, diagonals included.
 *
 * COMPLEXITY
 *   Naive:  O(m * n) extra space — copy the board and read neighbours from the copy.
 *   Target: O(m * n) time, O(1) space — encode both states in each cell (e.g. 2 means was-dead-now-live), then normalise in a second pass.
 * ----------------------------------------------------------------------
 */

function gameOfLife(board) {
  // TODO: your solution here
}

module.exports = { gameOfLife };
