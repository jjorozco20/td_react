/**
 * @param {object} properties -
 * @returns {object} state
 */
export default function state(properties) {
	return {
		username: {
			value: '',
			error: null,
		},
		password: {
			value: '',
			error: null,
		},
		logging: false,
		error: null,
		...properties,
	};
}
