
计算机网络七层模型：
* 物理层：机械、电子、定时接口通信信道上的原始比特流传输。IOS2110，IEEE802，IEEE802.2。
* 数据链路层：物理寻址，同时将原始比特流转变为逻辑传输线路。SLIP，CSLIP，PPP。
* 网络层：控制子网的运行，如逻辑编址、分组传输、路由选择。IP，ICMP，ARP，RARP。
* 传输层：接受上一层的数据，在必要的时候把数据分割，并将这些数据交给网络层，且保证这些数据段有效到达对端。TCP，UDP。
* 会话层：不同机器上的用户之间建立及管理会话。
* 表示层：信息的语法语义以及它们的关联，如加密解密、转换翻译、压缩解压缩
* 应用层：各种应用程序协议。HTTP、FTP、SMTP、POP3等。

TCP三次握手：客户端和服务器相互确认双向连接。

TCP四次挥手：客户端和服务器，相互确认无数据传输，并中断链接。

UDP，用于发送少量数据。使用UDP协议不需要建立连接，只需要知道对方的IP地址和端口号，就可以直接发送数据包，但不确保数据能否到达。尽管UDP是不可靠的数据传输，跟TCP比较，它的传输速度快，需要的资源少，对于不要求可靠到达的数据传输，可以使用UDP协议。

TCP与UDP的区别？
1. TCP传输慢，UDP传输快，因为UDP不面向连接；
2. TCP传输需要建立连接，UDP不需要；TCP传输可靠，UDP不可靠；
3. TCP传输使用流模式，UDP传输使用数据报模式（使用DatagramePacket传输数据）；
4. TCP保证数据的正确性，UDP可能丢包；TCP保证传输顺序，UDP不保证；
5. TCP适合传输大量数据，UDP不会分片，不适合传输大数据；
6. 对系统资源的要求，TCP较多，UDP较少。

HTTP，超文本传输协议，是服务器传输超文本到本地浏览器的传送协议。

HTTP-报文

Request:

* Connection：定义C/S之间关于请求/响应的有关选项
* Via: 显示了报文经过的中间节点
* Cache-Control: 缓存指示
* Content-Encoding：支持的编码
* Content-Language：支持的自然语言
* Content-Length：文本长度
* Content-Location：资源所在位置
* Content-Range：在整个资源中此实体表示的字节范围
* Content-Type：主体的对象类型
* ETag: 实体标签
* Expires: 过期期限
* Last-Modified: 上一次的修改时间
* Host: 请求的主机名和端口号，虚拟主机环境下用于不同的虚拟主机
* Referer：指明了请求当前资源的原始资源的URL
* User-Agent: 用户代理，使用什么工具发出的请求
* Accept: 指明服务器能发送的媒体类型
* Accept-Charset: 支持使用的字符集
* Accept-Encoding: 支持使用的编码方式
* Accept-Language: 支持使用语言
* Expect: 告诉服务器能够发送来哪些媒体类型
* If-Modified-Since: 是否在指定时间以来修改过此资源
* If-None-Match:如果提供的实体标记与当前文档的实体标记不符，就获取此文档
跟安全相关的请求首部：
* Authorization: 客户端提交给服务端的认证数据，如帐号和密码
* Cookie: 客户端发送给服务器端身份标识

Response:
* Date标头：消息产生的时间
* Age标头:（从最初创建开始）响应持续时间
* Server标头: 向客户端标明服务器程序名称和版本
* ETage标头：不透明验证者
* Location标头：URL备用的位置
* Content-Length标头：实体的长度
* Content-Tyep标头：实体的媒体类型

get和post的区别
1. get请求，数据是跟在url后面的；而post请求的数据则是放在请求包的包体中；
2. get请求的url长度有限制，post理论上没有数据大小的限制（服务器中其实可以设置数据提交的大小，拿php为例，php.ini的post_max_size可设置提交数据的大小）；
3. post的安全性比get的安全性高，因为get的数据是暴露在url上的。

