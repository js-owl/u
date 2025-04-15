import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const svg = { test: /\.svg$/, use: ['@svgr/webpack'] };

  const babelLoader = buildBabelLoader(options);
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const file = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [{ loader: 'file-loader' }]
  };
  // const ts = { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ };
  const css = buildCssLoader(isDev);
  return [svg, file, babelLoader, codeBabelLoader, tsxCodeBabelLoader, css];
}
