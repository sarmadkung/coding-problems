/**
 * 097 — Word Search II
 * Difficulty: Hard   ·   Topic: Tries
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Given an m x n board of characters and a list of words, return all words from the
 *   list that can be formed from sequentially adjacent cells (horizontal or vertical).
 *   A cell may not be reused within a single word.
 *
 * CONSTRAINTS
 *   m == board.length, n == board[i].length
 *   1 <= m, n <= 12
 *   1 <= words.length <= 3 * 10^4
 *   1 <= words[i].length <= 10
 *
 * EXAMPLES
 *   findWords([["o","a"],["e","t"]], ["oa", "oat", "ae"])  ->  ["oa", "ae"]
 *   findWords([["a"]], ["a"])   ->  ["a"]
 *   findWords([["a"]], ["b"])   ->  []
 *
 * EDGE CASES
 *   - The result must contain no duplicates even if a word is findable twice.
 *   - With 3 * 10^4 words, running Word Search once per word is far too slow.
 *   - Prune trie branches once fully consumed to keep later searches fast.
 *
 * COMPLEXITY
 *   Naive:  O(words * m * n * 4^L) — running the single-word search independently for each word times out.
 *   Target: Build a trie of ALL words, then DFS the board ONCE, walking the trie in step and abandoning a path the moment no trie node matches.
 * ----------------------------------------------------------------------
 */

function findWords(board, words) {
  // TODO: your solution here
}

module.exports = { findWords };
