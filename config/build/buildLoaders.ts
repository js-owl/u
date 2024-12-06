import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const ts = { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ };
  const css = {
    test: /\.s[ac]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
  };
  return [ts, css];
}
