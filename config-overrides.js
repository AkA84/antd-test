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
    // modifyVars: { "@primary-color": "#1DA57A" },
    javascriptEnabled: true
  })(config, env);

  // config.plugins.push(new ExtractTextPlugin({
  //   filename: 'foobar.css'
  // }));

  return config;
}
