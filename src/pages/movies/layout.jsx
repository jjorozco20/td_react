import React from 'react';
import { usePageContext } from './context';
import List from './list';
// import Router from './router';

/**
 * @augments View
 * @param {object} properties
 * @returns {React.Component} component
 */
export default function Layout() {
	const [state] = usePageContext();
	const { title, movies } = state;

	console.log(movies);

	return (
		<>
			<h1>{title}</h1>
			{movies.length > 0 ? <List value={movies}></List> : <span>Empty</span>}
		</>
	);
}
