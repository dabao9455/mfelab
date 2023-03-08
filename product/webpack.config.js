const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const packageJson = require("./package.json")
module.exports = {
    mode: "development",
    module: {
        rules: [
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-react", "@babel/preset-env"],
                plugins: ["@babel/plugin-transform-runtime"],
              },
            },
          },
        ],
      },
    plugins:[
        new ModuleFederationPlugin({
            name:"product",
            filename:"remoteEntry.js",
            exposes:{
                './productIndex':"./src/index.js"
            },
            shared:packageJson.dependencies
        })
    ]

};
