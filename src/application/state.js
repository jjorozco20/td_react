import Session from './session';

/**
 * @param {object} properties -
 * @returns {object} state
 */
export default function state(properties) {
	const session = new Session();

	return {
		session,
		...properties,
	};
}
