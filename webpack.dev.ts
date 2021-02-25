import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractLoader from 'mini-css-extract-plugin';
import webpack from 'webpack';

const config: webpack.Configuration = {
    entry: resolve(__dirname, 'src', 'index.tsx'),
    mode: 'development',
    devtool: 'source-map',
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
                test: /\.js$/,
                enforce: 'pre',
                use: 'source-map-loader',
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
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        compress: true,
        port: 3000,
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                secure: false,
                changeOrigin: true,
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public', 'index.html'),
        }),
        new MiniCssExtractLoader(),
    ],
};

export default config;
