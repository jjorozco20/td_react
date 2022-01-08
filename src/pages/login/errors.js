export class ErrorField extends Error {
	constructor({ message, ...properties }) {
		super(message);

		this.field = properties.field;
	}
}
