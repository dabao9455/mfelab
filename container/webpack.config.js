const HtmlWebPackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
module.exports={
    mode:"development",
    // module: {
    //     rules: [
    //       {
    //         test: /\.(js|mjs|jsx|ts|tsx)$/,
    //         exclude: /node_modules/,
    //         use: {
    //           loader: "babel-loader",
    //           options: {
    //             presets: ["@babel/preset-react", "@babel/preset-env"],
    //             plugins: ["@babel/plugin-transform-runtime"],
    //           },
    //         },
    //       },
    //     ],
    //   },
    devServer:{
        port:8080
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:"./public/index.html"
        }),
        new ModuleFederationPlugin({
            name:"container",
            remotes:{
                product:"product@http://localhost:8081/remoteEntry.js"
            }
        })
    ]
}