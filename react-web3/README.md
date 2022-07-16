## create-react-app + web3

```javascript
// 创建项目：
npx create-react-app react-web3 --template typescript
// 安装web3
yarn add web3
// 解决webpack 不兼容web3的坑
// 增加依赖
yarn add --dev react-app-rewired process crypto-browserify stream-browserify assert stream-http https-browserify os-browserify url buffer
// 根目录创建 config-overrides.js 写入文件
// package.json 修改script
// “start”: “react-app-rewired start”,
// 解决window扩展属性标红的提示
declare const window: any;

```
