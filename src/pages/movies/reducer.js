import produce from 'immer';
import { Actions as ActionEnum } from './enums';

/**
 * @param root0
 * @param root0.payload
 * @param root0.state
 */
function LoadInitialState({ payload, state }) {
	const { movies } = state;
	const newMovies = payload.movies ? payload.movies : movies;

	// JS Proxy
	state.loading = payload.loading;
	state.movies = [...movies, ...newMovies];
}

/**
 * @param state - MOVIES STORE
 * @param action
 */
export default function MovieReducer(state, action) {
	const { type, payload } = action;

	return produce(state, (draft) => {
		draft.title = 'Hack Title';

		switch (type) {
			case ActionEnum.load:
				// Update | Mutate
				LoadInitialState({ payload, state: draft });
				break;
			default:
				return state;
		}
	});
}
