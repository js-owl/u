import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const ts = { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ };
  const css = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      { loader: "css-loader", options: { modules: true } },
      "sass-loader",
    ],
  };
  return [ts, css];
}
