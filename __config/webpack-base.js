/*
    This is the file we use to create the
    configuration that transpiles the JSX
    into JS and creates the server so
    we have live changes
*/

import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import dotenv from 'dotenv';
import fs from 'fs';
import chalk from 'chalk';

import { randomInRange } from './utils';

dotenv.config();

const { NAME, PROJECT, MODULES } = process.env;

if (!PROJECT) {
    console.log(`
${chalk.red('🌵 No project selected. Stopping process...')}
${chalk.bgCyan(`Did you run "npm start" before?`)}
`);
    process.exit(1);
}

fs.writeFileSync(
    './.env',
    `
NAME=${NAME || ''}
    `
);

const cssModuleRules = Number(MODULES)
    ? [
          {
              test: /\.css$/,
              loader: 'style-loader',
          },
          {
              test: /\.css$/,
              loader: 'css-loader',
              options: {
                  modules: {
                      localIdentName: '[path][name]__[local]--[hash:base64:5]',
                  },
              },
          },
      ]
    : [
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
          },
      ];

const config = {
    mode: 'development',
    entry: [
        'react-hot-loader/patch',
        path.resolve(__dirname, `../${PROJECT}/index.js`),
    ],
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devtool: 'source-map',
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        open: true,
        contentBase: path.join(__dirname, `../${PROJECT}/public/`),
        port: randomInRange(3000, 9000),
    },
    module: {
        rules: [
            {
                // Check for eslint errors
                enforce: 'pre',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    cache: false,
                    configFile: '.eslintrc',
                    failOn: false,
                    fix: true,
                    quiet: true,
                },
            },
            {
                // Compile main index
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    cacheDirectory: false,
                    presets: ['@babel/preset-react'],
                    plugins: [
                        'react-hot-loader/babel',
                        '@babel/plugin-proposal-class-properties',
                    ],
                },
            },
            ...cssModuleRules,
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8000,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(
                __dirname,
                `../${PROJECT}/public/index.html`
            ),
        }),
    ],
    resolve: {
        modules: [
            path.resolve(`../${PROJECT}`),
            path.resolve('./node_modules'),
        ],
        extensions: ['.js', '.jsx'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    },
    stats: 'errors-only',
    watchOptions: {
        ignored: ['node_modules'],
    },
};

export default config;
