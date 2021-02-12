# Linked List

``` javascript
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
```

## 01 - Linked List Cycle

Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Example: Tail connects to the second node.
```
Input: head = 1->2->3->4, [4->2]
Output: head = 2->3->4
```

Example: No cycle
```
Input: head = 1->2
Output: null
```

Solution

``` javascript
const cycle = (head) => {
  if (!head || !head.next) return null;
  let [l1, l2] = [head, head];

  while (l2 && l2.next) {
    l1 = l1.next;
    l2 = l2.next.next;
    if (l1 === l2) break;
  }

  if (l1 !== l2) return null;

  let current = head;
  while (current !== l1) {
    current = current.next;
    l1 = l1.next;
  }
  return current;
};
```

## 02 - Remove Nth Node From End of Linked List

Given the head of a linked list, remove the nth node from the end of the list and return its head.


Example: 
```
Input: head = 1->2->3->4->5, n = 2
Output: head = 1->2->3->5
```

Solution:

``` javascript
const remove = (head, n) => {
  let [slow, fast] = [head, head];
  let i = 0;
  while (fast && i < n) {
    fast = fast.next;
    i += 1;
  }

  if (!fast) return head;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return head;
};
```

## 03 - Reverse Linked List

Example:

```
Input: head = 1->2->3->4->5
Output: head = 5->4->3->2->1
```

Solution:

``` javascript
const reverse = (head) => {
  let [current, prev, next] = [head, null, null];
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
```

## 04 - Sort List

Given the head of a linked list, return the list after sorting it in ascending order.

Time: O(n logn)
Memory: O(1)

Example:

```
Input: head = 4->2->1->3
Output: head = 1->2->3->4
```

Solution:

``` javascript
```


## 05 -  Palindrome Linked List

Determine if a singly linked list is a palindrome.

Example:

```
Input: head = 1->2
Output: false
```

Example:

```
Input: head = 1->2->2->1
Output: true
```

Solution

``` javascript
```

## 06 - 