const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS_CORE = [
    'core-js'
]

const VENDOR_LIBS_REACT = [
    'react'
]

const VENDOR_LIBS_DOM = [
    'react-dom'
]

module.exports = env => {
    
    const {PLATFORM, VERSION } = env;
    return merge([
        
        {
            entry: {
                bundle: './src/index.js',
                vendor1: VENDOR_LIBS_CORE,
                vendor2: VENDOR_LIBS_REACT,
                vendor3: VENDOR_LIBS_DOM
            },
            output: {
                filename: PLATFORM === 'production' ? 'scripts/[name]-[chunkhash:8].js' : 'scripts/[name].js',
                path: path.resolve(__dirname, '../dist'),
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader'
                        }
                    },
                    {
                        test: /\.(scss|sass|css)$/,
                        exclude: /node_modules/,
                        loaders: [
                            MiniCssExtractPlugin.loader,
                            {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: true,
                                importLoaders: 1,
                                localIdentName: '[local]___[hash:base64:5]'
                            },
                        },
                            'postcss-loader',
                            'sass-loader'
                        ]
                    },
                    {
                        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                        use: [{
                            loader: 'file-loader',
                            options: {
                                name: '[path][name]-[hash:8].[ext]'
                            },
                        }],
                    },
                    {
                        test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                        use: [{
                            loader: 'image-webpack-loader',
                            options: {
                                mozjpeg: {
                                    progressive: true,
                                    quality: 65
                                },
                                // optipng.enabled: false will disable optipng
                                optipng: {
                                    enabled: false,
                                },
                                pngquant: {
                                    enabled: false,
                                },
                                gifsicle: {
                                    interlaced: false,
                                },
                                // the webp option will enable WEBP
                                webp: {
                                    quality: 75
                                }
                            }
                        }],
                    },
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: './src/index.html',
                    filename: './index.html',
                    favicon: 'src/favicon.ico',
                    inject: true
                }),
                new webpack.NamedModulesPlugin(),
                new MiniCssExtractPlugin({
                    filename: PLATFORM === 'production' ? 'styles/[name].[hash].css' : 'styles/[name].css',
                    chunkFilename: PLATFORM === 'production' ? '[id].[hash].css]' : '[id].css',
                }),
                new CopyWebpackPlugin([ {from: 'src/static'}]),
                new webpack.DefinePlugin({
                    'process.env.VERSION': JSON.stringify(env.VERSION),
                    'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
                }),
                new ImageminPlugin({
                    disable: false,
                    jpegtran: {
                        progressive: false
                    },
                }),
                new webpack.optimize.AggressiveMergingPlugin(),
            ],
        }
    ])
}