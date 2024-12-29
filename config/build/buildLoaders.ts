import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svg = { test: /\.svg$/, use: ["@svgr/webpack"] };
  const file = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [{ loader: "file-loader" }],
  };
  const ts = { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ };
  const css = buildCssLoader(isDev);
  return [svg, file, ts, css];
}
