import rules from './rules';
import plugins from './plugins';
import alias from './alias';
import { source, build } from './paths';

export default {
	context: source,
	entry: {
		polyfills: `${source}/helpers/polyfills.js`,
		application: `${source}/web.jsx`,
	},
	output: {
		filename: '[name].bundle.js',
		path: build,
	},
	resolve: {
		// INFO: defined .mjs first [https://github.com/graphql/graphql-js/issues/1272]
		extensions: ['.mjs', '.js', '.jsx', '.json'],
		alias,
	},
	module: { rules },
	plugins,
};
