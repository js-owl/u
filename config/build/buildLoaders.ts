import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svg = { test: /\.svg$/, use: ["@svgr/webpack"] };
  const file = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [{ loader: "file-loader" }],
  };
  const ts = { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ };
  const css = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };
  return [svg, file, ts, css];
}
