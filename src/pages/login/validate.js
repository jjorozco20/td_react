import { fields } from './enums';
import { ErrorField } from './errors';

/**
 * @param {string} value -
 * @returns {boolean} true whether value is empty. Otherwise false
 */
function isEmpty(value) {
	return value === '' || value === null || value === undefined;
}

/**
 * @param {object} state -
 */
export default function validate(state) {
	const username = state.username.value;
	const password = state.password.value;

	if (isEmpty(username)) {
		throw new ErrorField({ message: 'Required field', field: fields.Username });
	}

	if (isEmpty(password)) {
		throw new ErrorField({ message: 'Required field', field: fields.Password });
	}
}
