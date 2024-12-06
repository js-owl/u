import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const ts = { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ };
  const css = {
    test: /\.s[ac]ss$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  };
  return [ts, css];
}
