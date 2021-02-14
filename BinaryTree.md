# Binary Tree

**Contents**

01. Traversal
02. Depth

**TreeNode**

``` javascript
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
```

**Concepts**

* **DFS**: Depth First Search
* **BFS**: Breadth First Search

## 01. Traversal

Given the root of a binary tree, return the inorder/preorder/postorder/levelOrder traversal of its nodes' values.

**Inorder**

``` javascript
/**
 * DFS
 * @param {TreeNode} root
 * @param {Array} arr
 */
const inorder = (root, arr = []) => {
  if (root) {
    inorder(root.left, arr);
    arr.push(root.val);
    inorder(root.right, arr);
  }
  return arr;
};
```

**Preorder**

``` javascript
/**
 * DFS
 * @param {TreeNode} root
 * @param {Array} arr
 */
const preorder = (root, arr = []) => {
  if (root) {
    arr.push(root.val);
    preorder(root.left, arr);
    preorder(root.right, arr);
  }
  return arr;
};
```

**Postorder**

``` javascript
/**
 * DFS
 * @param {TreeNode} root
 * @param {Array} arr
 */
const postorder = (root, arr = []) => {
  if (root) {
    postorder(root.left, arr);
    postorder(root.right, arr);
    arr.push(root.val);
  }
  return arr;
};
```

**Level Order** - from left to right, level by level.

``` javascript
/**
 * DFS
 * @param {TreeNode} root
 * @param {Number} level
 * @param {Array} arr
 */
const levelOrder = (root, level = 0, arr = []) => {
  if (root) {
    if (!arr[level]) arr[level] = [];
    arr[level].push(root.val);
    levelOrder(root.left, level + 1, arr);
    levelOrder(root.right, level + 1, arr);
  }
  return arr;
};
```

``` javascript
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
```

## 02. Depth

Given the root of a binary tree, return its maximum/minimum depth.

**Maximum Depth** - A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

``` javascript
/**
 * DFS
 * @param {TreeNode} root
 */
const maxDepth = (root) => {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
```

``` javascript
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
```

**Minimum Depth** - The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

``` javascript
/**
 * DFS
 * @param {TreeNode} root
 * @param {Number} min
 */
const minDepth = (root, min = Infinity) => {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  if (root.left) {
    min = Math.min(minDepth(root.left), min);
  }
  if (root.right) {
    min = Math.min(minDepth(root.right), min);
  }

  return min + 1;
};
```

``` javascript
/**
 * BFS
 * @param {TreeNode} root
 */
const minDepth = (root) => {
  if (root == null) return 0;

  const queue = [root];
  let depth = 1;

  while (queue.length) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i += 1) {
      const cur = queue.shift();
      if (cur.left == null && cur.right == null) {
        return depth;
      }
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    depth += 1;
  }
  return 0;
};
```

## 03. 

Example:

```
```

Solution:

``` javascript
```



## 04. 

Example:

```
```

Solution:

``` javascript
```



## 05. 

Example:

```
```

Solution:

``` javascript
```



## 06. 

Example:

```
```

Solution:

``` javascript
```


