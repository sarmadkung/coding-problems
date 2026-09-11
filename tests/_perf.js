/**
 * Large-input cases, keyed by problem number.
 *
 * These are what actually enforce the "Target:" complexity line in each problem
 * header. A correct-but-quadratic solution passes every small example and then
 * dies here — which is the whole point.
 *
 *   args()          build the arguments for the call (deterministic, no Math.random)
 *   expect(out,args) sanity-check the result, so returning a constant cannot pass
 *   maxMs           the time budget; the runner kills the process at 3x this
 *   label           what gets printed
 */
'use strict';

// Deterministic pseudo-random, so a failure is always reproducible.
function lcg(seed) {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const range = (n, f) => Array.from({ length: n }, (_, i) => f(i));

module.exports = {
  // 001 Two Sum — the answer sits at the very end, so no early-exit luck.
  1: {
    label: '200k elements',
    maxMs: 1000,
    args() {
      const n = 200000;
      return [range(n, (i) => i + 1), 2 * n - 1];
    },
    expect(out) {
      return Array.isArray(out) && out.length === 2 && new Set(out).size === 2;
    },
  },

  // 002 Contains Duplicate — all distinct is the worst case (no early exit).
  2: {
    label: '150k distinct elements',
    maxMs: 800,
    args: () => [range(150000, (i) => i)],
    expect: (out) => out === false,
  },

  // 003 Product of Array Except Self
  3: {
    label: '150k elements',
    maxMs: 800,
    args: () => [range(150000, () => 1)],
    expect: (out, [nums]) => Array.isArray(out) && out.length === nums.length && out[0] === 1,
  },

  // 004 Maximum Subarray
  4: {
    label: '200k elements',
    maxMs: 800,
    args() {
      const rnd = lcg(7);
      return [range(200000, () => Math.floor(rnd() * 200) - 100)];
    },
    expect: (out) => typeof out === 'number' && Number.isFinite(out),
  },

  // 005 Group Anagrams
  5: {
    label: '20k words',
    maxMs: 1500,
    args() {
      const rnd = lcg(11);
      const letters = 'abcdefghij';
      return [
        range(20000, () =>
          range(8, () => letters[Math.floor(rnd() * letters.length)]).join('')
        ),
      ];
    },
    expect: (out, [strs]) =>
      Array.isArray(out) && out.reduce((n, g) => n + g.length, 0) === strs.length,
  },

  // 006 Top K Frequent Elements
  6: {
    label: '200k elements, k=10',
    maxMs: 1000,
    args() {
      const rnd = lcg(13);
      return [range(200000, () => Math.floor(rnd() * 5000)), 10];
    },
    expect: (out) => Array.isArray(out) && out.length === 10,
  },

  // 051 Valid Anagram
  51: {
    label: '200k characters',
    maxMs: 800,
    args() {
      const rnd = lcg(17);
      const s = range(200000, () => 'abcdefghijklmnopqrstuvwxyz'[Math.floor(rnd() * 26)]).join('');
      const t = s.split('').reverse().join('');
      return [s, t];
    },
    expect: (out) => out === true,
  },

  // 052 Longest Consecutive Sequence — shuffled, so no accidental ordering.
  52: {
    label: '150k shuffled elements',
    maxMs: 800,
    args() {
      const rnd = lcg(19);
      const nums = range(150000, (i) => i);
      for (let i = nums.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
      return [nums];
    },
    expect: (out) => out === 150000,
  },

  // 053 Subarray Sum Equals K
  53: {
    label: '30k elements',
    maxMs: 1000,
    args() {
      const rnd = lcg(23);
      return [range(30000, () => Math.floor(rnd() * 5) - 2), 3];
    },
    expect: (out) => typeof out === 'number' && out >= 0,
  },
};
