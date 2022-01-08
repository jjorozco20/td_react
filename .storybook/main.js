require("@babel/register");

const path = require('path');
const root = path.resolve(__dirname, '..');

module.exports = {
	stories: [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)"
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials"
	],
	webpackFinal: (configuration) => {
		console.log(configuration.resolve.alias)
		configuration.resolve.alias['application'] = `${root}/src/application`;
		configuration.resolve.alias['components'] = `${root}/src/components`;
		configuration.resolve.alias['contexts'] = `${root}/src/contexts`;
		configuration.resolve.alias['data'] = `${root}/src/data`;
		configuration.resolve.alias['helpers'] = `${root}/src/helpers`;
		configuration.resolve.alias['pages'] = `${root}/src/pages`;
		configuration.resolve.alias['theme'] = `${root}/src/theme`;
		configuration.resolve.alias['api'] = `${root}/src/api`;

		return configuration;
	},
}