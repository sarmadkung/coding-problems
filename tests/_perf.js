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

  // 101 Majority Element — the majority is spread through the array, not bunched.
  // Hash-map counting is also O(n); this catches accidental O(n^2), not the space target.
  101: {
    label: '1M elements',
    maxMs: 800,
    args() {
      const rnd = lcg(101);
      return [range(1000000, (i) => (i % 5 < 3 ? 42 : Math.floor(rnd() * 1e9)))];
    },
    expect: (out) => out === 42,
  },

  // 102 Move Zeroes — half zeros, so splice-in-a-loop pays for every one.
  102: {
    label: '200k elements, half zero',
    maxMs: 500,
    args: () => [range(200000, (i) => (i % 2 ? i : 0))],
    expect: (out, [nums]) =>
      nums.length === 200000 && nums[0] === 1 && nums[99999] === 199999 && nums[100000] === 0 && nums[199999] === 0,
  },

  // 103 Rotate Array — rotating by one, k times, is O(n * k).
  103: {
    label: '100k elements, k=50001',
    maxMs: 500,
    args: () => [range(100000, (i) => i), 50001],
    expect: (out, [nums]) => nums.length === 100000 && nums[0] === 49999 && nums[50001] === 0,
  },

  // 164 Contains Duplicate II — one call true (pair planted at distance exactly k at the
  // very end), one call false (same pair at distance k + 1). Scanning k ahead is O(n * k).
  164: {
    label: '2 × 100k elements, k=50k',
    maxMs: 800,
    args() {
      const n = 100000;
      const k = 50000;
      const hit = range(n, (i) => i);
      hit[n - 1] = hit[n - 1 - k];
      const miss = range(n, (i) => i);
      miss[n - 1] = miss[n - 2 - k];
      return [hit, miss, k];
    },
    run: (f, [hit, miss, k]) => [f(hit, k), f(miss, k)],
    expect: (out) => Array.isArray(out) && out[0] === true && out[1] === false,
  },

  // 165 Isomorphic Strings — one isomorphic pair, one that breaks on the last character.
  165: {
    label: '2 × 200k characters',
    maxMs: 800,
    args() {
      const rnd = lcg(165);
      const a = 'abcdefghijklmnopqrstuvwxyz';
      const s = range(200000, () => a[Math.floor(rnd() * 26)]).join('');
      const t = s.replace(/[a-z]/g, (ch) => a[(a.indexOf(ch) + 7) % 26]);
      const bad = t.slice(0, -1) + (t[t.length - 1] === 'a' ? 'b' : 'a');
      return [s, t, bad];
    },
    run: (f, [s, t, bad]) => [f(s, t), f(s, bad)],
    expect: (out) => Array.isArray(out) && out[0] === true && out[1] === false,
  },

  // 166 Find All Numbers Disappeared — every 10th value is missing. A Set is also O(n);
  // this catches includes()/indexOf() in a loop, not the O(1) space target.
  166: {
    label: '200k elements',
    maxMs: 500,
    args: () => [range(200000, (i) => (i % 10 === 9 ? 1 : i + 1))],
    expect: (out) => Array.isArray(out) && out.length === 20000 && out.every((v) => v % 10 === 0),
  },

  // 167 Majority Element II — two values above n/3, the rest noise.
  // Hash-map counting is also O(n); this catches O(n^2), not the space target.
  167: {
    label: '1M elements',
    maxMs: 1000,
    args() {
      const rnd = lcg(167);
      return [range(1000000, (i) => (i % 20 < 7 ? 7 : i % 20 < 14 ? -3 : Math.floor(rnd() * 1e9) + 10))];
    },
    expect: (out) => Array.isArray(out) && out.length === 2 && out.includes(7) && out.includes(-3),
  },

  // 168 Find All Duplicates — 50k values twice, 100k once, shuffled.
  // A Set is also O(n); this catches O(n^2), not the space target.
  168: {
    label: '200k shuffled elements',
    maxMs: 500,
    args() {
      const rnd = lcg(168);
      const nums = [];
      for (let v = 1; v <= 50000; v++) nums.push(v, v);
      for (let v = 50001; v <= 150000; v++) nums.push(v);
      for (let i = nums.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
      return [nums];
    },
    expect: (out) => Array.isArray(out) && out.length === 50000 && out.every((v) => v >= 1 && v <= 50000),
  },

  // 169 First Missing Positive — shuffled 1..n with one value knocked out.
  // Sorting first (O(n log n)) usually still fits; this catches O(n^2) scans.
  169: {
    label: '1M shuffled elements',
    maxMs: 1000,
    args() {
      const rnd = lcg(169);
      const nums = range(1000000, (i) => i + 1);
      for (let i = nums.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
      nums[nums.indexOf(777777)] = -5;
      return [nums];
    },
    expect: (out) => out === 777777,
  },

  // 170 Longest Palindrome — far past the constraint, to catch per-letter rescans.
  170: {
    label: '1M characters',
    maxMs: 500,
    args() {
      const rnd = lcg(170);
      const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      return [range(1000000, () => a[Math.floor(rnd() * 52)]).join('')];
    },
    expect(out, [s]) {
      const count = {};
      for (const ch of s) count[ch] = (count[ch] || 0) + 1;
      let len = 0;
      let odd = 0;
      for (const c of Object.values(count)) {
        len += c - (c % 2);
        if (c % 2) odd = 1;
      }
      return out === len + odd;
    },
  },

  // 007 Valid Palindrome — punctuation and mixed case, true and false versions.
  7: {
    label: '2 × 1M characters',
    maxMs: 800,
    args() {
      const rnd = lcg(7007);
      const a = 'abcdefghijklmnopqrstuvwxyz0123456789';
      const half = range(500000, () => a[Math.floor(rnd() * 36)]);
      const mirrored = half.concat(half.slice().reverse());
      const good = mirrored.map((ch, i) => (i % 7 === 0 ? ch.toUpperCase() + ', ' : ch)).join('');
      const broken = mirrored.slice();
      broken[400000] = broken[400000] === 'x' ? 'y' : 'x';
      const bad = broken.join('');
      return [good, bad];
    },
    run: (f, [good, bad]) => [f(good), f(bad)],
    expect: (out) => Array.isArray(out) && out[0] === true && out[1] === false,
  },

  // 008 3Sum — every non-zero value is 1 mod 4, so no triplet containing one can sum to
  // zero and the only answer is the planted [0,0,0]. Every two-pointer scan runs fully.
  8: {
    label: '3000 elements',
    maxMs: 800,
    args() {
      const rnd = lcg(8008);
      const nums = [0, 0, 0];
      for (let i = 0; i < 1500; i++) {
        nums.push(4 * Math.floor(rnd() * 25000) + 1);
        nums.push(-(4 * Math.floor(rnd() * 25000) + 3));
      }
      return [nums];
    },
    expect: (out) =>
      Array.isArray(out) && out.length === 1 && out[0].length === 3 && out[0].every((v) => v === 0),
  },

  // 009 Container With Most Water
  9: {
    label: '200k elements',
    maxMs: 500,
    args() {
      const rnd = lcg(9009);
      return [range(200000, () => Math.floor(rnd() * 10001))];
    },
    expect: (out) => typeof out === 'number' && out > 0,
  },

  // 010 Trapping Rain Water — far past the constraint; per-bar scans are O(n^2).
  10: {
    label: '200k elements',
    maxMs: 500,
    args() {
      const rnd = lcg(1010);
      return [range(200000, () => Math.floor(rnd() * 100001))];
    },
    expect: (out) => typeof out === 'number' && out > 0,
  },

  // 054 Remove Duplicates from Sorted Array — splice per duplicate is O(n^2).
  54: {
    label: '1M elements, 201 unique',
    maxMs: 500,
    args: () => [range(1000000, (i) => Math.floor((i * 201) / 1000000) - 100)],
    expect: (out, [nums]) => out === 201 && nums[0] === -100 && nums[100] === 0 && nums[200] === 100,
  },

  // 055 Two Sum II — evens plus one odd, with an odd target, so the only pair uses the odd
  // value near the middle. Nested loops are O(n^2).
  55: {
    label: '200k elements',
    maxMs: 500,
    args() {
      const numbers = range(200000, (i) => 2 * i);
      numbers.splice(100000, 0, 199999);
      return [numbers, 199999 + 200002];
    },
    expect: (out, [numbers, target]) =>
      Array.isArray(out) &&
      out.length === 2 &&
      out[0] < out[1] &&
      numbers[out[0] - 1] + numbers[out[1] - 1] === target,
  },

  // 056 Sort Colors — a two-pass count is also O(n); this catches O(n^2) swapping.
  56: {
    label: '1M elements',
    maxMs: 500,
    args() {
      const rnd = lcg(5656);
      return [range(1000000, () => Math.floor(rnd() * 3))];
    },
    expect(out, [nums]) {
      for (let i = 1; i < nums.length; i++) if (nums[i - 1] > nums[i]) return false;
      return nums.length === 1000000;
    },
  },

  // 171 Valid Palindrome II — the extra character sits mid-way. Deleting each character and
  // re-checking is O(n^2).
  171: {
    label: '2 × 100k characters',
    maxMs: 500,
    args() {
      const rnd = lcg(171);
      const half = range(50000, () => 'abcdefghijklmnopqrstuvwxyz'[Math.floor(rnd() * 26)]);
      const pal = half.concat(half.slice().reverse());
      const oneOff = pal.slice();
      oneOff.splice(30000, 0, 'z');
      const twoOff = oneOff.slice();
      twoOff.splice(70000, 0, 'z');
      return [oneOff.join(''), twoOff.join('')];
    },
    run: (f, [a, b]) => [f(a), f(b)],
    expect: (out) => Array.isArray(out) && out[0] === true && out[1] === false,
  },

  // 172 Squares of a Sorted Array — square-then-sort (O(n log n)) may still fit the budget;
  // this mainly catches O(n^2) insertion.
  172: {
    label: '1M elements',
    maxMs: 800,
    args: () => [range(1000000, (i) => i - 600000)],
    expect(out) {
      if (!Array.isArray(out) || out.length !== 1000000 || out[0] !== 0) return false;
      for (let i = 1; i < out.length; i += 997) if (out[i - 1] > out[i]) return false;
      return out[out.length - 1] === 600000 * 600000;
    },
  },

  // 173 Is Subsequence — slicing t after every match is O(|s| * |t|).
  173: {
    label: '2 × 1M-character t, 1000-character s',
    maxMs: 500,
    args() {
      const rnd = lcg(173);
      const t = range(1000000, () => 'abcdefghijklmnopqrstuvwxy'[Math.floor(rnd() * 25)]);
      const s = range(1000, (i) => t[i * 999 + 5]).join('');
      return [s, t.join(''), s.slice(0, -1) + 'z'];
    },
    run: (f, [s, t, bad]) => [f(s, t), f(bad, t)],
    expect: (out) => Array.isArray(out) && out[0] === true && out[1] === false,
  },

  // 174 Reverse String — a reversed copy is also O(n); this catches O(n^2) shifting.
  174: {
    label: '1M characters',
    maxMs: 500,
    args: () => [range(1000000, (i) => String.fromCharCode(33 + (i % 90)))],
    expect: (out, [s]) =>
      s.length === 1000000 && s[0] === String.fromCharCode(33 + (999999 % 90)) && s[999999] === '!',
  },

  // 175 3Sum Closest — all values even and the target odd, so no exact hit ends it early.
  175: {
    label: '3000 elements',
    maxMs: 800,
    args() {
      const rnd = lcg(175);
      return [range(3000, () => 2 * Math.floor(rnd() * 1001) - 1000), 1];
    },
    expect: (out) => out === 0 || out === 2,
  },

  // 176 4Sum — every value is 1 mod 5, so four of them can never sum to zero; the only
  // answer is the planted [0,0,0,0]. Every inner scan runs fully.
  176: {
    label: '600 elements',
    maxMs: 800,
    args() {
      const rnd = lcg(176);
      const nums = [0, 0, 0, 0];
      for (let i = 0; i < 596; i++) nums.push(5 * (Math.floor(rnd() * 2001) - 1000) + 1);
      return [nums, 0];
    },
    expect: (out) =>
      Array.isArray(out) && out.length === 1 && out[0].length === 4 && out[0].every((v) => v === 0),
  },

  // 177 Boats to Save People — searching for each person's best partner is O(n^2).
  177: {
    label: '200k people',
    maxMs: 800,
    args() {
      const rnd = lcg(177);
      return [range(200000, () => Math.floor(rnd() * 30000) + 1), 30000];
    },
    expect: (out, [people]) => typeof out === 'number' && out >= people.length / 2 && out <= people.length,
  },

  // 178 Next Permutation — pivot at index 0 over a long descending suffix, so the whole
  // suffix must be reversed. Far past the constraint, to catch repeated rescans.
  178: {
    label: '1M elements',
    maxMs: 500,
    args() {
      const nums = [0];
      for (let v = 100; v >= 1; v--) for (let r = 0; r < 10000; r++) nums.push(v);
      return [nums];
    },
    expect(out, [nums]) {
      if (nums.length !== 1000001 || nums[0] !== 1) return false;
      for (let i = 2; i < nums.length; i++) if (nums[i - 1] > nums[i]) return false;
      return nums[1] === 0;
    },
  },
};
