const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = function (env, { mode }) {
  const production = mode === "production";
  return {
    mode: production ? "production" : "development",
    devtool: production ? "source-map" : "inline-source-map",
    entry: {
      app: ["./src/main.ts"],
    },
    output: {
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".ts", ".js"],
      modules: ["src", "node_modules"],
    },
    devServer: {
      port: 9000,
      historyApiFallback: true,
      writeToDisk: true,
      open: !process.env.CI,
      lazy: false,
    },
    plugins: [new CleanWebpackPlugin()],
    module: {
      rules: [
        {
          test: /\.js$/i,
          use: [{ loader: path.resolve(__dirname, "./template-loader.js") }],
        },
        {
          test: /\.ts$/i,
          use: [
            {
              loader: path.resolve(__dirname, "./template-loader.js"),
            },
            {
              loader: "ts-loader",
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },
  };
};
