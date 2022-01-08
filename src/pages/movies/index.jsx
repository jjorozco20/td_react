import React from 'react';
import Context from './context';
import Layout from './layout';

/**
 * @augments Page
 * @param {object} properties
 * @returns {React.Component} component
 */
export default function Movies(properties) {
	return (
		<>
			<Context value={properties}>
				<Layout />
				{properties.children}
			</Context>
		</>
	);
}
