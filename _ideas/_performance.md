如何解决移动端Click事件300ms延迟的问题？
https://zhuanlan.zhihu.com/p/69522350


性能指标
https://juejin.cn/post/6844904200044806157

FCP - First Contentful Paint

衡量页面开始加载到页面中第一个元素被渲染之间的时间。元素包含文本、图片、canvas等。


LCP - Largest Contentful Paint

衡量标准视口内可见的最大内容元素的渲染时间。元素包括img、video、div及其他块级元素。


FID - First Input Delay

测量从用户第一次与页面交互的时间到浏览器实际上能够响应这种交互的时间。交互包括用户点击一个链接或者一个按钮等。


TTI -Time to Interactive 

测量页面所有资源加载成功并能够可靠地快速响应用户输入的时间。



TBT - Total Blocking Time 

衡量从FCP到TTI之间主线程被阻塞时长的总和。


