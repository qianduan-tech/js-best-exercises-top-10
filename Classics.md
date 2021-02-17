


## 01. bind apply call

bind

``` javascript
Function.prototype.mybind = function mybind() {
  const self = this;
  const context = [].shift.call(arguments);
  const args = [].slice.call(arguments);
  return () => self.apply(context, [].concat.call(args, [].slice.call(arguments)));
};
```

apply

``` javascript
Function.prototype.myApply = function (context = window, arr = []) {
  context.fn = this;
  const result = context.fn(...arr);
  delete context.fn;
  return result;
};
```

call

``` javascript
Function.prototype.myCall = function (context = window, ...arr) {
  context.fn = this;
  const result = context.fn(...arr);
  delete context.fn;
  return result;
};
```


## Throttle Debounce

Debounce

``` javascript
function debounce(handler, delay){

  delay = delay || 300;
  var timer = null;

  return function(){

    var _self = this,
        _args = arguments;

    clearTimeout(timer);
    timer = setTimeout(function(){
      handler.apply(_self, _args);
    }, delay);
  }
```

Throttle

``` javascript
function throttle(fn,wait=300){
    var lastTime = 0
    return function(){
        var that = this,args=arguments
        var nowTime = new Date().getTime()
        if((nowTime-lastTime)>wait){
            fn.apply(that,args)
            lastTime = nowTime
        }
    }
}
```


## 计数器

```
a = foo(); // 1
b = foo(); // 2
c = foo(); // 3
foo.clear();
d = foo(); // 1;
```

```
function myIndex() {
    var index = 1;

    function foo(){
        return index++;
    }

    foo.clear = function() {
        index = 1;
    }
    return foo;
}

var foo = myIndex();
```

## curry

```
add(1)(2)(3) = 6
add(1, 2)(3) = 10
```

```
function curry(func) {
    // 存储已传入参数
    let _args = []

    // 做一个闭包
    function _curry(...args) {
        // 把参数合并
        _args = _args.concat(args)

        // 如果参数够了就执行
        if (_args.length >= func.length) {
            const result = func(..._args)
            _args = []
            return result;
        }
        // 继续返回此函数 
        else {
            return _curry
        }
    }
    return _curry
}
// 测试代码
function add1(a, b, c) {
    return a + b + c
}
let testAdd = curry(add1)
console.log(testAdd(1)(2)(3))
console.log(testAdd(1, 2)(3))
console.log(testAdd(1)(2, 3))
```

## deepclone


## flat

## _.get

## 

