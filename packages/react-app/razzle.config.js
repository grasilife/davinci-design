const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  plugins: ["less", "bundle-analyzer", "eslint"],
  options: {
    verbose: true,
    buildType: "spa",
  },
  modifyWebpackConfig(opts) {
    const config = opts.webpackConfig;
    const url = opts.env.dev
      ? process.env.FEDERATED_URL_DEV
      : process.env.FEDERATED_URL;
    config.resolve.alias = {
      "@": path.resolve(__dirname, "src"),
    };
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "react-app",
        filename: "remoteEntry.js",
        remotes: {
          libs: `libs@${url}remoteEntry.js`,
        },
        exposes: {},
        shared: [],
      })
    );

    return config;
  },
};
