import { TreeNode } from '../utils';
import inorderDFS from './inorder.DFS';
import inorderBFS from './inorder.BFS';
import preorderDFS from './preorder.DFS';
import preorderBFS from './preorder.BFS';
import postorderDFS from './postorder.DFS';
import postorderBFS from './postorder.BFS';
import levelOrderDFS from './levelOrder.DFS';
import levelOrderBFS from './levelOrder.BFS';

test('traversal', () => {
  const tree = new TreeNode(1);
  tree.right = new TreeNode(2);
  tree.right.left = new TreeNode(3);

  expect(inorderDFS(tree).join()).toBe('1,3,2');
  expect(inorderBFS(tree).join()).toBe('1,3,2');

  expect(preorderDFS(tree).join()).toBe('1,2,3');
  expect(preorderBFS(tree).join()).toBe('1,2,3');

  expect(postorderDFS(tree).join()).toBe('3,2,1');
  expect(postorderBFS(tree).join()).toBe('3,2,1');

  expect(levelOrderDFS(tree).join()).toBe('1,2,3');
  expect(levelOrderBFS(tree).join()).toBe('1,2,3');
});
