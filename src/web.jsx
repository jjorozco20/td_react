import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Application from 'application';
// import { BrowserRouter } from 'react-router-dom';
import Movies from 'pages/movies';

import { usePageContext } from 'pages/movies/context';

/**
 *
 */
function Malisuos() {
	const [store] = usePageContext();

	// store.title = 'Hack Title';

	return <h1>{store.title}</h1>;
}

// import 'theme/index.css';

document.addEventListener('DOMContentLoaded', () => {
	const root = document.createElement('div');

	root.id = 'root';
	root.setAttribute('style', 'height: 100%');

	document.title = process.env.APPLICATION_NAME;
	document.body.prepend(root);

	//	 APPLICATION LEVEL
	ReactDOM.render(
		<Application>
			<Movies title="Temporal Movies">
				<Malisuos />
			</Movies>
		</Application>,
		root
	);
});
