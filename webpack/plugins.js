import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import Dotenv from 'dotenv-webpack';
import { envFile } from './paths';

export default [
	new CleanWebpackPlugin(),
	new Dotenv({ path: envFile, systemvars: true }),
	new HtmlWebpackPlugin({
		hash: true,
		meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
	}),
	new MiniCssExtractPlugin({
		filename: '[name].css',
		chunkFilename: '[id].css',
	}),
	new BundleAnalyzerPlugin({ openAnalyzer: false }),
];
