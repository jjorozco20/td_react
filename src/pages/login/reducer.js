import { actions } from './enums';

/**
 * @param {object} state -
 * @param {object} action -
 * @returns {object} state
 */
function mergeUsername(state, action) {
	const { value, error } = action.payload;

	return {
		...state,
		username: {
			value: value === undefined ? '' : value,
			error: error === undefined ? '' : error,
		},
	};
}

/**
 * @param {object} state -
 * @param {object} action -
 * @returns {object} state
 */
function mergePassword(state, action) {
	const { value, error } = action.payload;

	return {
		...state,
		password: {
			value: value === undefined ? '' : value,
			error: error === undefined ? '' : error,
		},
	};
}

/**
 * @param {object} state -
 * @param {object} action -
 * @returns {object} state
 */
export default function reducer(state, action) {
	switch (action.type) {
		case actions.SetUsername:
			return mergeUsername(state, action);
		case actions.SetPassword:
			return mergePassword(state, action);
		case actions.SetLogging:
			return { ...state, logging: action.payload };
		case actions.SetError:
			return { ...state, error: action.payload };
		default:
			throw new Error('Invalid action');
	}
}
