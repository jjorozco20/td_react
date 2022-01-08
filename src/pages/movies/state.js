/**
 * @param properties
 */
export default function State(properties) {
	const { title, movies } = properties;

	return {
		loading: false,
		title: title || 'Movies',
		// movies: [ { Models::Movie } ]
		movies: movies || [],
	};
}
