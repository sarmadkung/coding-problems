/**
 * 095 — Implement Trie (Prefix Tree)
 * Difficulty: Medium   ·   Topic: Tries
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Implement a trie supporting insert(word), search(word) returning whether the exact
 *   word was inserted, and startsWith(prefix) returning whether any inserted word has
 *   that prefix.
 *
 * CONSTRAINTS
 *   1 <= word.length, prefix.length <= 2000
 *   All inputs consist of lowercase English letters.
 *   At most 3 * 10^4 calls are made.
 *
 * EXAMPLES
 *   const t = new Trie();
 *   t.insert("apple");
 *   t.search("apple")    ->  true
 *   t.search("app")      ->  false   // inserted as a prefix only
 *   t.startsWith("app")  ->  true
 *
 * EDGE CASES
 *   - search must distinguish a full word from a mere prefix — flag terminal nodes.
 *   - Inserting the same word twice is harmless.
 *   - The empty prefix matches anything (if permitted by constraints).
 *
 * COMPLEXITY
 *   Naive:  Storing words in an array makes startsWith O(n * L) per query.
 *   Target: O(L) per operation, where L is the word length — a node per character with a children map and an isEnd flag.
 * ----------------------------------------------------------------------
 */

class Trie {
  // TODO: your solution here
}

module.exports = { Trie };
