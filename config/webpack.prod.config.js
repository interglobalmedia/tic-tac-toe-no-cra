const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Plugins
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const baseConfig = require('./webpack.base.config');

const prodConfiguration = env => {
    return merge([
        {
            optimization: {
                // runtimeChunk: 'single',
                // splitChunks: {
                //     cacheGroups: {
                //         vendor: {
                //             test: /[\\/]node_modules[\\/]/,
                //             name: 'vendors',
                //             chunks: 'all'
                //         }
                //     }
                // },
                minimizer: [new UglifyJSPlugin()],
            },
            plugins: [
                new MiniCssExtractPlugin(),
                new OptimizeCssAssetsPlugin(),
                new Visualizer({ filename: './statistics.html' })
            ]
        }
    ])
}

module.exports = env => {
    return merge(baseConfig(env), prodConfiguration(env));
}