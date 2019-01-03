// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override (config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'import-antd'],
    config
  );
  config = injectBabelPlugin(
    ['import', { libraryName: 'ant-design-pro', libraryDirectory: 'lib', style: true, camel2DashComponentName: false }, 'import-antd-pro'],
    config
  );

  config = rewireLess.withLoaderOptions({
    modifyVars: {
      '@btn-primary-bg': '#db6f6f',
      '@btn-height-base': '40px',
      '@btn-height-lg': '44px',
      '@btn-height-sm': '32px',
      '@btn-padding-sm': '0 @padding-xs + 3',
      '@border-radius-base': '3px',
      '@card-radius': '@border-radius-base',
      '@breadcrumb-separator-margin': '0 5px',
      '@menu-item-color': '#828182',
      '@menu-item-height': '45px',
      '@menu-item-active-bg': '#EFEFEF',
      '@menu-highlight-color': '#29bcb8',
      '@input-height-base': '37px',
    },
    javascriptEnabled: true
  })(config, env);

  // config.plugins.push(new ExtractTextPlugin({
  //   filename: 'foobar.css'
  // }));

  return config;
}
