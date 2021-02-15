# Binary Tree

**Contents**

1. Traversal
2. Depth
3. Construct
4. View 
5. Invert
6. Same Tree
7. Binary Search Tree
8. Balanced Binary Tree
9. Path Sum
10. Ancestor

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

``` javascript
/**
 * BFS
 */
const inorder = (root) => {
  const stack = [];
  const result = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
  return result;
};
```

**Preorder**

``` javascript
/**
 * DFS
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

``` javascript
/**
 * BFS
 */
const preorder = (root) => {
  const stack = [];
  const result = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      result.push(root.val);
      root = root.left;
    }
    root = stack.pop();
    root = root.right;
  }
  return result;
};
```

**Postorder**

``` javascript
/**
 * DFS
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

``` javascript
/**
 * BFS
 */
const postorder = (root) => {
  const stack = [];
  const result = [];

  let prev;
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (!root.right || root.right === prev) {
      result.push(root.val);
      prev = root;
      root = null;
    } else {
      stack.push(root);
      root = root.right;
    }
  }
  return result;
};
```
**Level Order** - from left to right, level by level.

``` javascript
/**
 * DFS
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
 * BFS
 */
const levelOrder = (root) => {
  if (!root) return [];
  const queue = [root];
  const result = [];

  while (queue.length) {
    let len = queue.length;
    const arr = [];
    while (len) {
      const node = queue.shift();
      arr.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len -= 1;
    }
    result.push(arr);
  }
  return result;
};
```
## 02. Depth

Given the root of a binary tree, return its maximum/minimum depth.

**Maximum Depth** - A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

``` javascript
/**
 * DFS
 */
const maxDepth = (root) => {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
```

``` javascript
/**
 * BFS
 */
const maxDepth = (root) => {
  if (!root) return 0;
  const queue = [root];
  let level = 0;
  while (queue.length) {
    let len = queue.length;
    while (len) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
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
 */
const minDepth = (root) => {
  if (!root) return 0;
  const queue = [root];
  let level = 1;
  while (queue.length) {
    let len = queue.length;
    while (len) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right)queue.push(node.right);
      if (!node.left && !node.right) return level;
      len -= 1;
    }
    level += 1;
  }
  return level;
};
```

## 03. Construct

Given preorder and inorder traversal of a tree, construct the binary tree.

Solution:

``` javascript
// To do
```

Given inorder and postorder traversal of a tree, construct the binary tree.

Solution:

``` javascript
// To do
```

## 04. View

Given the root of a binary tree, imagine yourself standing on the right or left side of it, return the values of the nodes you can see ordered from top to bottom.

**Binary Tree Right Side View**

``` javascript
/**
 * BFS
 */
const rightSideView = (root) => {
  if (!root) return [];
  const queue = [root];
  const result = [];

  while (queue.length) {
    let len = queue.length;
    while (len) {
      const node = queue.shift();
      if (len === 1) result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len -= 1;
    }
  }
  return result;
};
```

**Binary Tree Left Side View**

``` javascript
/**
 * BFS
 */
const leftSideView = (root) => {
  if (!root) return [];
  const queue = [root];
  const result = [];

  while (queue.length) {
    let len = queue.length;
    let first = true;
    while (len) {
      const node = queue.shift();
      if (first) {
        result.push(node.val);
        first = false;
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len -= 1;
    }
  }
  return result;
};
```
## 05. Invert

Invert a binary tree.

``` javascript
const invert = (root) => {
  if (root === null) {
    return null;
  }
  const left = invert(root.left);
  const right = invert(root.right);
  root.left = right;
  root.right = left;
  return root;
};

```

## 06. 

Example:

```
```

Solution:

``` javascript
```


