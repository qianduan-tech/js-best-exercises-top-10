import { toString, createFromArray } from '../utils';
import reverse from './reverse';

/**
 * Input: head = 1->2->3->4-5
 * Output: head = 5->4->3->2->1
 */
test('reverse', () => {
  const list = createFromArray([1, 2, 3, 4, 5]);
  const newList = reverse(list);
  expect(toString(newList)).toBe('5,4,3,2,1');
});

/**
 * Input: head = null
 * Output: head = null
 */
test('reverse null', () => {
  const list = null;
  const newList = reverse(list);
  expect(toString(newList)).toBe('');
});
