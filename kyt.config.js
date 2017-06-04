
// Base kyt config.
// Edit these properties to make changes.

module.exports = {
  reactHotLoader: true,
  debug: false,
  modifyWebpackConfig: (baseConfig, options) => {
    baseConfig.entry.main.push('whatwg-fetch');
    return baseConfig;
  }
};
