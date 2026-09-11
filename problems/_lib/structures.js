/**
 * Shared node types and (de)serializers.
 *
 * Platforms print a tree or a linked list as a flat array, but they hand your
 * function a real node object. These helpers are that translation, so the
 * examples in a problem header and the value your solution receives agree.
 *
 *   tree   level-order (breadth-first) with `null` for a missing child,
 *          exactly as the platforms print it:  [3, 9, 20, null, null, 15, 7]
 *   list   values in order, head first:        [1, 2, 3, 4, 5]
 */

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/** Level-order array -> TreeNode. `[]` or `[null]` gives null. */
function buildTree(arr) {
  if (!Array.isArray(arr) || arr.length === 0 || arr[0] === null) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (i < arr.length) {
      const v = arr[i++];
      if (v !== null) {
        node.left = new TreeNode(v);
        queue.push(node.left);
      }
    }
    if (i < arr.length) {
      const v = arr[i++];
      if (v !== null) {
        node.right = new TreeNode(v);
        queue.push(node.right);
      }
    }
  }
  return root;
}

/** TreeNode -> level-order array, with trailing nulls trimmed. */
function treeToArray(root) {
  if (!root) return [];
  const out = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node === null) {
      out.push(null);
      continue;
    }
    out.push(node.val);
    queue.push(node.left || null, node.right || null);
  }
  while (out.length && out[out.length - 1] === null) out.pop();
  return out;
}

/** Array of values -> ListNode chain. `[]` gives null. */
function buildList(arr) {
  if (!Array.isArray(arr)) return null;
  let head = null;
  for (let i = arr.length - 1; i >= 0; i--) head = new ListNode(arr[i], head);
  return head;
}

/** ListNode chain -> array of values. Throws on a cycle rather than hanging. */
function listToArray(head) {
  const out = [];
  let node = head;
  let guard = 0;
  while (node) {
    out.push(node.val);
    node = node.next;
    if (++guard > 1e6) throw new Error('listToArray: the list appears to contain a cycle');
  }
  return out;
}

/**
 * Build a list whose tail links back to index `pos` (-1 for no cycle).
 * This is how the cycle-detection problems specify their input.
 */
function buildCycleList(arr, pos = -1) {
  const head = buildList(arr);
  if (pos < 0 || !head) return head;
  const nodes = [];
  for (let node = head; node; node = node.next) nodes.push(node);
  nodes[nodes.length - 1].next = nodes[pos];
  return head;
}

module.exports = {
  TreeNode,
  ListNode,
  buildTree,
  treeToArray,
  buildList,
  listToArray,
  buildCycleList,
};
