// const docsLoader = require.resolve('./doc-loader');

module.exports = (isDev) => {
  return {
    preserveWhitespace: true, // template末尾空格的情况
    extractCSS: !isDev, // 
    cssModules: {},
    // hotReload: false // 根据环境变量生成
    // loaders: {
      // 'docs': docsLoader,
      // js: 'coffe-loader', 指定loader后解析vue不同模块会用该loader解析
    // },
    // preLoader: { // 在指定loader解析前先用该loader解析: 如ts
    // }
  };
};