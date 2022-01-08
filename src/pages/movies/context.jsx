import React, { useMemo, useReducer, createContext, useContext, useEffect } from 'react';
import reducer from './reducer';
import ActionFactory from './actions';
import state from './state';
import { useServices } from 'contexts/services';

// Singleton
const Store = createContext();

// Singleton
const Action = createContext();

/**
 *
 */
export function usePageContext() {
	// { object ... loading, movies ... }
	const store = useContext(Store);
	// { load(), create(), update(), delete() }
	const actions = useContext(Action);

	return [store, actions];
}

/**
 * @param properties
 */
export default function Context(properties) {
	// value = <Movies { ...properties } />
	const { value, children } = properties;
	const [services] = useServices();
	const [store, dispatch] = useReducer(reducer, value, state);
	const actions = useMemo(() => ActionFactory(dispatch, services), [dispatch]);

	useEffect(() => {
		actions.load();
	}, []);

	return (
		<Store.Provider value={store}>
			<Action.Provider value={actions}>{children}</Action.Provider>
		</Store.Provider>
	);
}
