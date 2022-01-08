/**
 * Read the profile data from session storage
 *
 * @returns {object} profile
 */
function readProfile() {
	const value = sessionStorage.getItem('profile');
	const profile = JSON.parse(value);

	return profile || {};
}

/**
 * Write the profile data to session storage
 *
 * @param {object} profile - user's profile information
 */
function writeProfile(profile) {
	const value = JSON.stringify(profile);

	sessionStorage.setItem('profile', value);
}

/**
 *
 */
export default class Session {
	constructor(properties) {
		const { loggedIn = false, profile = {} } = properties || {};

		if (Object.keys(profile).length) {
			writeProfile(profile);
		}

		this.profile = readProfile();
		this.loggedIn = loggedIn || this.hasSession();
	}

	/**
	 * @returns {boolean} true if there is a session. Otherwise false
	 */
	hasSession() {
		return !!Object.keys(this.profile).length;
	}

	/**
	 *
	 */
	end() {
		sessionStorage.clear();
	}
}
