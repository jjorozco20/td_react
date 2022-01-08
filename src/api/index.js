import usersData from 'data/users.json';

/**
 * @class API
 */
export default class API {
	constructor(properties = {}) {
		this.url = properties.url;
	}

	static login(credential) {
		return new Promise((resolve, reject) => {
			const user = usersData.find((item) => item.username === credential.username);
			const match = user ? user.password === credential.password : false;

			if (!user || !match) {
				reject(new Error('Invalid credentials'));
			}

			return resolve(user.profile);
		});
	}
}
