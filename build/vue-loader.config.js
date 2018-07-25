// const docsLoader = require.resolve('./doc-loader');

module.exports = (isDev) => {
  return {
    preserveWhitespace: true, // template末尾空格的情况
    extractCSS: !isDev, // 
    cssModules: {
      localIdentName: isDev ? "[path]-[name]-[hash:base64:5]" : '[hash:base64:5]', // css对应的classname编译成根据文件名生成的名字
      camelCase: true, // css中"-"命名转换成camel case在js调用
    },
    // hotReload: false // 根据环境变量生成
    // loaders: {
      // 'docs': docsLoader,
      // js: 'coffe-loader', 指定loader后解析vue不同模块会用该loader解析
    // },
    // preLoader: { // 在指定loader解析前先用该loader解析: 如ts
    // }
  };
};