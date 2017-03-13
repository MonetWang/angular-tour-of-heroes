## angular-tour-of-heroes

-->[angular2官方API](https://angular.cn/docs/ts/latest/tutorial/)源码，新手向教程。  

与angularJS不同，angular2需要搭建框架，下面以新手角度描述如何搭建框架。



### Node.js
***
node.js是javascript的运行环境，可以说是运行在服务端的javascript。

在angular2新手教程中只要使用到node.js强大的包管理器npm即可。

关于下载 --> [node.js下载](http://nodejs.cn/download/) ，windows下选择msi安装包。  
关于npm  --> npm集成在node.js上，不用另外安装。 npm在控制台使用，支持通过命令行下载第三方包，如`npm install`


### typescript
***
typescript是javascript的超集，拓展了其特性，例如: 可选类型、模块、类etc，最终会由编译器编译成.js文件。

angular2中使用[typescript](https://www.tslang.cn/docs/tutorial.html)较为契合。

### 教程
***
1.  新建工程angular-tour-of-heroes  
2.  确保工程有以下初始文件,相关配置文件copy自另一官方新手教程`quickstart`  
 ![](https://github.com/MonetWang/angular-tour-of-heroes/blob/master/img/1.png)
3.  当前工程下，在编译器的控制台，输入`npm install`下载库文件，成功后目录会有`node_modules`文件夹生成。
4.  接着输入`npm start`,等待一段时间后，会自动跳转至浏览器页面则表示start成功。在编写完代码后，直接刷新浏览器就可以看到效果啦~


### 更新日期
***
2017/3/13  源码更新至`路由`
