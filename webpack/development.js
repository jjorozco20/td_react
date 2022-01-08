import { build } from './paths';

export default {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		// contentBase: build,
		// clientLogLevel: 'debug',
		client: {
			logging: 'info',
		},
		compress: true,
		https: true,
		port: 8443,
		hot: true,
		historyApiFallback: true,
		// open: {
		// 	app: ['Google Chrome', '--incognito'],
		// },
	},
};
