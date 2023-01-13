const {override, fixBabelImports, addLessLoader,adjustStyleLoaders} = require('customize-cra');

module.exports = override(
  // 针对antd实现按需打包: 根据import来打包(使用babel-plugin-import)
  // fixBabelImports('import', {
  //   libraryName: 'antd',
  //   libraryDirectory: 'es',
  //   style: true,  // 自动打包相关的样式
  // }),

  // 使用less-loader对源码中的less的变量进行重新指定
  // addLessLoader({
  //   javascriptEnabled: true,
  //   relativeUrls: false,
  //   globalVars: {'@primary-color': '#A80000'},
  // }),

  // 这个必须加进去，否则less不起作用
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      // Optionally adjust URLs to be relative. When false, URLs are already relative to the entry less file.
      relativeUrls: false
      // globalVars: { '@primary-color': '#A800ff' }, //这个好像不起作用了
      // cssModules: {
      //   // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
      //   localIdentName: "[path][name]__[local]--[hash:base64:5]",
      // }
    }
  }),


  // https://blog.csdn.net/mollerlala/article/details/124962952 
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  })
)