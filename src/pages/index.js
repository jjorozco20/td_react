// import React from 'react';
// import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import PageFactory from 'pages/factory';

// /**
//  * @class PageRouter
//  * @param {object} properties -
//  */
// export default function PageRouter(properties) {
// 	const { pages } = properties;

// 	return pages.map((page) => (
// 		<Route
// 			exact
// 			key={page.id}
// 			path={page.path}
// 			render={(routerProps) => PageFactory(page, routerProps)}
// 		/>
// 	));
// }

// PageRouter.propTypes = {
// 	pages: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			title: PropTypes.string,
// 			path: PropTypes.string,
// 			component: PropTypes.React,
// 		})
// 	),
// };
