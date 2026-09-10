/**
 * 094 — Find Median from Data Stream
 * Difficulty: Hard   ·   Topic: Heap / Priority Queue
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Design a data structure supporting addNum(num) to ingest a stream of integers and
 *   findMedian() to return the median of everything seen so far.
 *   Implement the MedianFinder class.
 *
 * CONSTRAINTS
 *   -10^5 <= num <= 10^5
 *   findMedian is only called after at least one addNum.
 *   At most 5 * 10^4 calls are made.
 *
 * EXAMPLES
 *   const mf = new MedianFinder();
 *   mf.addNum(1); mf.addNum(2);
 *   mf.findMedian()  ->  1.5
 *   mf.addNum(3);  mf.findMedian()  ->  2.0
 *
 * EDGE CASES
 *   - An even count averages the two middle values and may return a non-integer.
 *   - A single element is its own median.
 *   - Re-sorting on every insert is far too slow at 5 * 10^4 calls.
 *
 * COMPLEXITY
 *   Naive:  O(n log n) per query — keep an array and sort it on each findMedian call.
 *   Target: O(log n) insert, O(1) query — two heaps: a max-heap for the lower half and a min-heap for the upper, kept balanced within one element.
 * ----------------------------------------------------------------------
 */

class MedianFinder {
  // TODO: your solution here
}

module.exports = { MedianFinder };
