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

export default reverse;
