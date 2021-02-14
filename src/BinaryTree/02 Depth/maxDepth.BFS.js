/**
 * BFS
 * @param {TreeNode} root
 */
const maxDepth = (root) => {
  let level = 0;
  if (root == null) {
    return level;
  }
  const queue = [root];
  while (queue.length) {
    let len = queue.length;
    while (len) {
      const curNode = queue.pop();
      if (curNode.left)queue.unshift(curNode.left);
      if (curNode.right) queue.unshift(curNode.right);
      len -= 1;
    }
    level += 1;
  }
  return level;
};

export default maxDepth;
