import Movie from 'models/movie';

// TODO:
import moviesJSON from 'data/movies.json';

export default {
	movies: {
		get: async function () {
			const host = 'https://gist.githubusercontent.com/saniyusuf';
			const api = '406b843afdfb9c6a86e25753fe2761f4/raw';
			const endpoint = '523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON';
			const url = `${host}/${api}/${endpoint}`;
			const headers = {};

			return fetch(url, { headers })
				.then((response) => response.json())
				.then((response) => {
					// NORMALIZE
					const items = response.map((item) => new Movie(item));

					return {
						items,
					};
				})
				.catch((error) => {
					throw error;
				});

			// https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON
			// return new Promise((resolve, reject) => {
			// 	const items = moviesJSON.map((item) => new Movie(item));

			// 	if (false) {
			// 		reject({ error: new Error('Invalid Request') });
			// 	}

			// 	resolve({
			// 		items,
			// 		metadata: {},
			// 		error: null,
			// 	});
			// });
		},
		// post
		// delete
		// put
		// patch
		// ...
		// findById(id)
		// findByName(id)
		// findByRate(id)
	},
};
