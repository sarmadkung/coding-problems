/**
 * 142 — Design Twitter
 * Difficulty: Medium   ·   Topic: Queues & Design
 * ----------------------------------------------------------------------
 * PROBLEM
 *   Design a simplified Twitter: postTweet(userId, tweetId), getNewsFeed(userId) returning
 *   the 10 most recent tweet ids from the user and those they follow (most recent first),
 *   follow(followerId, followeeId) and unfollow(followerId, followeeId).
 *
 * CONSTRAINTS
 *   1 <= userId, followerId, followeeId <= 500
 *   0 <= tweetId <= 10^4
 *   At most 3 * 10^4 calls are made.
 *
 * EXAMPLES
 *   const t = new Twitter();
 *   t.postTweet(1, 5);
 *   t.getNewsFeed(1)  ->  [5]
 *   t.follow(1, 2); t.postTweet(2, 6);
 *   t.getNewsFeed(1)  ->  [6, 5]
 *
 * EDGE CASES
 *   - A user's own tweets always appear in their feed, followed or not.
 *   - Following yourself must not duplicate tweets.
 *   - Unfollowing someone you do not follow must not throw.
 *
 * COMPLEXITY
 *   Naive:  O(total tweets) per feed — gather every tweet from every followee and sort them all.
 *   Target: O(k log f) per feed — keep each user's tweets newest-first with a global timestamp, then merge the followees' lists with a heap, stopping after 10.
 * ----------------------------------------------------------------------
 */

class Twitter {
  // TODO: your solution here
}

module.exports = { Twitter };
