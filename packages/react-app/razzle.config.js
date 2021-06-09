const path = require("path");
module.exports = {
  plugins: ["less", "bundle-analyzer", "eslint"],
  options: {
    verbose: true,
    buildType: "spa",
  },
  modifyWebpackConfig(opts) {
    const config = opts.webpackConfig;
    config.resolve.alias = {
      "@": path.resolve(__dirname, "src"),
    };

    return config;
  },
};
