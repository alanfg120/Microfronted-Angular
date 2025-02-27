const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = {
  ...withModuleFederationPlugin({
    remotes: {
      mf2: "http://localhost:4200/remoteEntry.js",
      mf3: "http://localhost:4203/remoteEntry.js",
    },
    shared: {
      ...shareAll({
        singleton: true,
        strictVersion: true,
        requiredVersion: "auto",
      }),
    },
  }),
  output: {
    uniqueName: "host",
    publicPath: "auto",
  },
};
