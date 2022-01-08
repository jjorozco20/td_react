import WebpackBuilder, { ModeEnum } from './webpack/';

/**
 * @param {object} env - environment node variables or arguments from CLI
 * @returns {object} webpack configuration
 */
export default (env) => {
	const { production, development, testing } = env;
	let mode = {};

	if (production) {
		mode = ModeEnum.Production;
	} else if (development) {
		mode = ModeEnum.Development;
	} else if (testing) {
		mode = ModeEnum.Testing;
	}

	const builder = new WebpackBuilder({ mode });

	builder.generate();

	return builder.configuration;
};
