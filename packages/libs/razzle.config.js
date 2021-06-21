const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
  plugins: ["less", "bundle-analyzer"],
  options: {
    buildType: "spa",
  },
  modifyWebpackConfig(opts) {
    const config = opts.webpackConfig;

    config.plugins.push(
      new ModuleFederationPlugin({
        name: "libs",
        filename: "remoteEntry.js",
        library: { type: "var", name: "libs" },
        exposes: {
          "./antd": "./src/antd",
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
