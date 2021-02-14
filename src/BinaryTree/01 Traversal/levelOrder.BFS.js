/**
 * DFS
 * @param {TreeNode} root
 */
const levelOrder = (root) => {
  if (!root) return [];
  const queue = [root];
  const res = [];
  while (queue.length > 0) {
    let len = queue.length;
    const arr = [];
    while (len) {
      const node = queue.shift();
      arr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len -= 1;
    }
    res.push(arr);
  }
  return res;
};

export default levelOrder;
