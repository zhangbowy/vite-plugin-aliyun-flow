## vite-plugin-aliyun-flow
阿里云流水线打印插件


## 效果
可以在控制台查看代码的部署信息
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69da24d8e31d4380822326b650a35e76~tplv-k3u1fbpfcp-watermark.image?)
掘金文章 https://juejin.cn/post/7140516996428333070

##  使用
只在阿里云流水线有用
### 安装
```
npm i vite-plugin-aliyun-flow --D
```

vite.config.js/ts
```
import vitePluginAliFlow from "vite-plugin-aliyun-flow";

// plugins
plugins: [
    vitePluginAliFlow({ projectName: '绩效'}),
    ...
]
```