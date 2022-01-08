import React from 'react';
import PropTypes from 'prop-types';
import { Route, Navigate, Routes } from 'react-router';
import PageFactory from 'pages/factory';
import Layout from 'components/layout';

/**
 * @param {object} properties -
 * @returns {React.Component} component
 */
export default function Router(properties) {
	const { loggedIn, pathname, pages } = properties;
	const next = loggedIn && pathname === '/login' ? '/' : pathname;
	const items = pages
		.filter((page) => page.name !== 'login')
		.map(({ name, icon, path }) => ({ name, icon, path }));

	return (
		<>
			<Routes>
				{pages.map((page, index) => (
					<Route
						strict
						exact
						key={page.id || page.name || index}
						path={page.path}
						render={(routerProps) => {
							let content = PageFactory({ routerProps, ...page });

							if (page.name !== 'login') {
								content = <Layout value={items}>{content}</Layout>;
							}

							return content;
						}}
					/>
				))}
			</Routes>
			{loggedIn ? <Navigate to={next} /> : <Navigate to="/login" />}
		</>
	);
}

Router.propTypes = {
	loggedIn: PropTypes.bool,
	pathname: PropTypes.string,
	pages: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			name: PropTypes.name,
			path: PropTypes.string,
		})
	),
};

Router.defaultProps = {
	pages: [],
};
