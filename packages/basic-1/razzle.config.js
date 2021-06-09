"use strict";

const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const deps = require("./package.json").dependencies;

module.exports = {
  plugins: ["less", "bundle-analyzer"],
  options: {
    buildType: "spa",
  },
  modifyWebpackConfig(opts) {
    const config = opts.webpackConfig;

    const url = opts.env.dev
      ? process.env.FEDERATED_URL_DEV
      : process.env.FEDERATED_URL;

    config.plugins.push(
      new ModuleFederationPlugin({
        name: "app1",
        filename: "remoteEntry.js",
        remotes: {
          appBase: `appBase@${url}remoteEntry.js`,
        },
        exposes: {
          "./Button": "./src/Button",
        },
        shared: [
          {
            ...deps,
            react: {
              // eager: true,
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              // eager: true,
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        ],
      })
    );

    return config;
  },
};
