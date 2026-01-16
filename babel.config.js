module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    ["module-resolver", {
      root: ["."],
      alias: {
        "@components": "./src/components",
        "@hooks": "./src/hooks",
        "@routes": "./src/routes",
        "@screens": "./src/screens",
        "@theme": "./src/theme",
      }
    }]
  ],
};
