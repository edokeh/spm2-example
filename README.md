Spm2 自定义 build

结构如下
```
├─html
└─js
    ├─example
    ├─sea-modules
    ├─Gruntfile.js
```

业务代码放在 example 目录下，希望编译后被扔到 sea-modules 目录下，而且不想要版本号等等目录结构

打包方式是进入 js 目录，执行 `spm build`

这还是一个非常“初级阶段”的例子，需要做大量进一步的封装
