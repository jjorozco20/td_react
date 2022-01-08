import merge from 'webpack-merge';
import production from './production';
import development from './development';
import testing from './testing';
import Common from './common';

/**
 * @enum WebpackBuilderModeEnum
 */
export const ModeEnum = {
	Production: 'Production',
	Development: 'Development',
	Testing: 'Testing',
	Unknown: 'Unknown',
};

/**
 * @class WebpackBuilder
 */
export default class WebpackBuilder {
	constructor(attributes) {
		const { mode, configuration } = attributes;

		this.mode = mode || ModeEnum.Unknown;
		this.configuration = configuration;
	}

	getConfigurationByMode() {
		let configuration = {};

		switch (this.mode) {
			case ModeEnum.Production:
				configuration = production;
				break;
			case ModeEnum.Development:
				configuration = development;
				break;
			case ModeEnum.Testing:
				configuration = testing;
				break;
			case ModeEnum.Unknown:
			default:
				throw new Error('Unknown webpack mode');
		}

		return configuration;
	}

	generate() {
		const configuration = this.getConfigurationByMode();

		this.configuration = merge(Common, configuration);
	}
}
