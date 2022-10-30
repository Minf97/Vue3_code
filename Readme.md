# 3.通过esbuild 打包vue 代码

## pnpm install esbuild typescript -D -w
esbuild - es6
typescript - TS
miniimist - 参数解析，解析打包工具
-D - 作为开发依赖，而不是上线环境
-w - 安装在根目录下   workspace

## 为什么不使用webpack，而使用pnpm
因为pnpm非常快。webpack适合打包业务代码，源码最好还是roll up，但roll up需要安装很多插件plugin，这次就不使用rollup了

## pnpm tsc --init
光安装TS 还不行，还需要通过tsc命令配置ts。在使用tsc命令的时候，可以传递参数
