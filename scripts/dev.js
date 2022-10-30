// 开发环境就 run 这个脚本

// 在脚本中要引入 reactivity
// 如何引入呢？ 一开始安装了 minimist , 就是用这个
// 


// process.argv   进程中的一个参数列表，，
// 第一个是执行文件，用node来运行就是node
// 第二个是执行的哪个文件
// 这前两个都是不需要的
// _是参数，f是打包的格式


const path = require('path');
const { build } = require('esbuild');
// 解析用户命令行的参数
const args = require('minimist')(process.argv.slice(2))
// 这个表示打包的模块
const target = args._[0] || 'reactivity';
// 打包的格式
const format = args.f || 'global'
// dirname 是当前路径
const pkg = require(path.resolve(__dirname, `../packages/${target}/package.json`))
// 打包输出位置
const outputFormat = format.startsWith('global')
    ? 'iife'
    : format === 'cjs'
        ? 'cjs'
        : 'esm';

// 输出地址
// reactivity.global.js
// reactivity.esm.js
// reactivity.cjs.js
const outfile = path.resolve(__dirname, `../packages/${target}/dist/${target}.${format}.js`)


build({
    entryPoints: [path.resolve(__dirname, `../packages/${target}/src/index.ts`)],
    outfile,
    bundle: true,
    sourcemap: true,
    format: outputFormat,
    globalName: pkg.buildOptions?.name,
    platform: format === 'cjs' ? 'node' : 'browser',
    watch: { // 监控文件变化
        onRebuild(error) {
            if (!error) console.log(`rebuilt~~~~`)
        }
    }
}).then(() => {
    console.log('watching~~~')
})
