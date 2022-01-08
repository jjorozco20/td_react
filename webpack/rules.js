export default [
	{
		test: /.(js|jsx|mjs|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [['@babel/preset-env', { targets: 'defaults' }]],
			},
		},
	},
	{
		test: /\.(css|sass|less)$/i,
		use: ['style-loader', 'css-loader', 'postcss-loader'],
		// type: 'asset/resource',
	},
	{
		test: /\.(png|jpg|gif|svg|woff(2)?|ttf|eot)$/i,
		use: ['file-loader'],
		// type: 'asset/resource',
	},
	{
		test: /\.html$/i,
		// use: {
		// 	loader: 'html-loader',
		// 	options: {
		// 		esModule: true,
		// 	},
		// },
		loader: 'html-loader',
		options: {
			esModule: true,
		},
	},
];
