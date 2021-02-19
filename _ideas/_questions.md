全面的面试总结：

https://www.yuque.com/u1339897/kb/wn5mwv


https://zhuanlan.zhihu.com/p/261434182

# vue/react

vue 插件？
vue 双向绑定？

react 虚拟dom？
diff算法？复杂度o(n) 而不是o(n^3)


https://zhuanlan.zhihu.com/p/101330697

# js

js 的 this

async await 怎么基于ES5实现

co函数库源码解析 https://www.cnblogs.com/pqjwyn/p/7350820.html

js类型判断？ null undefined区别
new String('a') 和 'a'

js浮点数运算不精确 如何解决？

Dom 节点类型
正则表达式如何匹配url


# 网络知识

url输入，到展示全过程

# node

node框架如何实现容灾


# 其他

移动端高清方案？
浏览器事件为什么冒泡而不是捕获？

# 编程题


给定一个数组 

Promise.all

``` javascript
Promise.all = (arr) =>{
  const result = [];
  let i = 0;
  return  new Promise(reslove=>{
    arr.forEach(promise =>{
      promise.then(res=>{
        i++;
        result[i].push(res);
        if(i===arr.length) return result;
      })
    })
  })
}
```


Promise 并发限制

``` javascript
const fn = (promises,max) => {
  let num = 0;
  let pool = [];
  const run = ()=>{
    if(num === urls.length) return;
    // 执行一个promise
    let promise = promises[num]();
    // 从pool中移除自己
    const e = promise.then(()=>{
      pool.splice(pool.indexOf(e),1);
    })
    // 添加该promies到pool
    pool.push(e);
    // 限制循环次数
    if(pool.length >= max){
      Promise.race(pool).then(run);
    }else {
      run();
    }
  }
  run();
}
```

虚拟dom

``` javascript
class El {
  constructor(tag, props, children) {
    this.tag = tag;
    this.props = props;
    this.children = children;
  }

  render() {
    const el = document.createElement(this.tag);
    Object.entries(this.props).forEach(([key,value])=>{
      el.setAttribute(key,value);
    })
    this.children.forEach((child) => {
      const node = (child instanceof El) ? child.render() : document.createTextNode(child);
      el.appendChild(node);
    });
    return el;
  }
}

const el = (...arguments) => new El(...arguments);

const ul = el('ul', {id: 'list'}, [
  el('li', {class: 'item'}, ['Item 1']),
  el('li', {class: 'item'}, ['Item 2']),
  el('li', {class: 'item'}, ['Item 3'])
])
const ulRoot = ul.render();
document.body.appendChild(ulRoot);
```

模版引擎 原理

``` javascript
const tmpl = '<p>a{{data.a[0].b}}a{{data.a[1].b}}</p>'
const data ={a:[{b:1},{b:2}]}
function render(tmpl, data){
   tmpl = tmpl.replace(/\{\{/g,'${').replace(/\}\}/g,'}')
   console.log(tmpl);
   let fn = new Function('data', 'return `' + tmpl + '`')
   return fn(data);
}
console.log(render(tmpl,data))
```


给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

``` javascript
var isValid = function(s) {
  const hash = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    if (hash[s[i]]) stack.push(s[i]);
    else if (s[i] === hash[stack[stack.length - 1]]) stack.pop();
    else return false;
  }

  return !stack.length;
};
```


最小跳跃次数
[2, 5, 1, 1, 1, 1]   3

[-,-,1,1,2,3]

``` javascript
let n = jump.length;
let dp = new Array(n);
dp[n-1] = 1;
for(let i = n - 2; i >= 0; i--) {
    dp[i] = (jump[i] + i >= n ? 1 : dp[jump[i] + i] + 1);
    for(let j = i+1; j < n && dp[j] >= dp[i]+1; j++) dp[j] = dp[i] + 1;
}
return dp[0];
```




``` javascript
function currying(fn, ...rest1) {
  return function(...rest2) {
    return fn.apply(null, rest1.concat(rest2))
  }
}
```



``` javascript
function add() {
    var _args = [...arguments]

    var _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b;
        });
    }
    return _adder;
}
```
