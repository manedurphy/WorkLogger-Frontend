import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractLoader from 'mini-css-extract-plugin';
import webpack from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { resolve } from 'path';

const config: webpack.Configuration = {
    entry: {
        workLogger: resolve(__dirname, 'src', 'index.tsx'),
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractLoader.loader, 'css-loader'],
            },
            {
                test: /\.png$/i,
                use: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].[chunkhash].bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /node_modules/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
        runtimeChunk: {
            name: 'manifest',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public', 'index.html'),
        }),
        new MiniCssExtractLoader(),
        new CleanWebpackPlugin(),
        new CompressionPlugin(),
        new BundleAnalyzerPlugin(),
    ],
};

export default config;
