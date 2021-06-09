"use strict";

// const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  plugins: ["less", "bundle-analyzer"],
  options: {
    buildType: "spa",
  },
  //   modifyWebpackConfig(opts) {
  //     const config = opts.webpackConfig;

  //     config.plugins.push(
  //       new ModuleFederationPlugin({
  //         name: "react-app",
  //         filename: "remoteEntry.js",
  //         exposes: {},
  //         shared: [],
  //       })
  //     );

  //     return config;
  //   },
};
