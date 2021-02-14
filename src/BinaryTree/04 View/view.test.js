import { TreeNode } from '../utils';

import rightSideViewBFS from './rightSideView.BFS';

test('invert', () => {
  const tree = new TreeNode(1);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(3);

  tree.left.right = new TreeNode(5);

  tree.right.right = new TreeNode(4);

  expect(rightSideViewBFS(tree).join()).toBe('1,3,4');
});
