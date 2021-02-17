// import init from './bind';

import init from './init';

init();

test('bind/apply/call', () => {
  function fn(a = 0, b = 0) {
    return this.val + a + b;
  }
  const obj = { val: 1 };

  const execute = fn.myBind(obj);
  expect(execute()).toBe(1);
  expect(execute(1, 2)).toBe(4);

  expect(fn.myApply(obj)).toBe(1);
  expect(fn.myApply(obj, [1, 2])).toBe(4);

  expect(fn.myCall(obj)).toBe(1);
  expect(fn.myCall(obj, 1, 2)).toBe(4);
});
