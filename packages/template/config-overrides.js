const { customEntryConfig, fixBabelImports, addBabelPlugin } = require("@mono/cra");

module.exports = {
  webpack(config) {
    addBabelPlugin('babel-plugin-transform-typescript-metadata')(config);
    fixBabelImports("antd", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: 'css',
    })(config);
    customEntryConfig()(config);
    return config;
  },
};
