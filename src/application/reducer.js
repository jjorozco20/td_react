import Session from './session';
import { actions } from './enums';

/**
 * @param {object} state -
 * @param {object} action -
 * @returns {object} state
 */
function mergeSession(state, action) {
	if (state.session.hasSession()) {
		return state;
	}

	const session = new Session({ profile: action.payload });

	return {
		...state,
		session,
	};
}

/**
 * @param {object} state -
 * @param {object} action -
 * @returns {object} state
 */
export default function reducer(state, action) {
	switch (action.type) {
		case actions.SetSession:
			return mergeSession(state, action);
		default:
			throw new Error('Invalid action');
	}
}
