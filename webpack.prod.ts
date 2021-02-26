import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractLoader from 'mini-css-extract-plugin';
import webpack from 'webpack';
// import CompressionPlugin from 'compression-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
// import zlip from 'zlib';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
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
        filename: '[name].[contenthash].bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    optimization: {
        minimize: true,
        minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    enforce: true,
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [
        // new CompressionPlugin({
        //     filename: '[path][base].br',
        //     algorithm: 'brotliCompress',
        //     test: /\.(js|css|html|svg)$/,
        //     minRatio: 0.8,
        //     threshold: 10240,
        //     compressionOptions: {
        //         [zlip.constants.BROTLI_PARAM_QUALITY]: 11,
        //     },
        // }),
        // new CompressionPlugin({
        //     filename: '[path][base].gz',
        //     algorithm: 'gzip',
        //     test: /\.js$|\.css$|\.html$/,
        //     threshold: 10240,
        //     minRatio: 0.8,
        // }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public', 'index.html'),
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true,
            },
        }),
        new MiniCssExtractLoader({ filename: '[name].[contenthash].css' }),
        new CleanWebpackPlugin(),
        // new BundleAnalyzerPlugin(),
    ],
};

export default config;
