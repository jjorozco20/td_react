import { Actions as ActionEnum } from './enums';

/**
 * @param parameters
 * @param dispatch
 * @param api
 * @param services
 */
function Load(parameters, dispatch, services) {
	const { api } = services;

	dispatch({ type: ActionEnum.load, payload: { loading: true } });

	api.movies
		.get(parameters)
		.then((response) => {
			const { items } = response;
			// BY DEFAULT I HAVE TO FILTER > movies

			dispatch({ type: ActionEnum.load, payload: { loading: false, movies: items } });
		})
		.catch((error) => {
			dispatch({ type: ActionEnum.load, payload: { loading: false, error } });
		});
}

/**
 * @param dispatch
 * @param api
 * @param services
 */
export default function ActionCreator(dispatch, services) {
	// IAction
	return {
		load: (parameters) => Load(parameters, dispatch, services),
		create: () => { },
		update: () => { },
		delete: () => { },
		filter: () => { },
		createByType: () => { },
	};
}
