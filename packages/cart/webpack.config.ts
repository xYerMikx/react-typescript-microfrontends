import HTMLWebpackPlugin from 'html-webpack-plugin';
import { type Configuration, container } from 'webpack';
import path from 'path';
import 'webpack-dev-server';

const { ModuleFederationPlugin } = container;

const config: Configuration = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto',
  },
  mode: 'development',
  devServer: {
    port: 3001,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'cart.js',
      remotes: {},
      exposes: {
        './Cart': './src/Cart',
      },
      shared: ['react', 'react-dom'],
    }),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};

export default config;
