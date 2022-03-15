const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = function (env, { mode }) {
  const production = mode === "production";
  return {
    mode: production ? "production" : "development",
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
    plugins: [new CleanWebpackPlugin()],
    module: {
      rules: [
        {
          test: /\.ts$/i,
          use: [
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
