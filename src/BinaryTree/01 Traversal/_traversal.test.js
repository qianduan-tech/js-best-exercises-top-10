import { TreeNode } from '../utils';
import inorder from './inorder.DFS';
import preorder from './preorder.DFS';
import postorder from './postorder.DFS';
import levelOrderDFS from './levelOrder.DFS';
import levelOrderBFS from './levelOrder.BFS';

test('traversal', () => {
  const tree = new TreeNode(1);
  tree.right = new TreeNode(2);
  tree.right.left = new TreeNode(3);

  expect(inorder(tree).join()).toBe('1,3,2');
  expect(preorder(tree).join()).toBe('1,2,3');
  expect(postorder(tree).join()).toBe('3,2,1');
  expect(levelOrderDFS(tree).join()).toBe('1,2,3');
  expect(levelOrderBFS(tree).join()).toBe('1,2,3');
});
