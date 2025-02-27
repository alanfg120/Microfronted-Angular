const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = {
  ...withModuleFederationPlugin({
    name: "mf2",

    exposes: {
      "./Component": "./src/app/app.component.ts",
      "./UserService": "./src/app/services/user.service.ts",
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
    uniqueName: "mf2",
    publicPath: "auto",
  },
};
