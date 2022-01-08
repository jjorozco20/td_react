import React from 'react';

/**
 * @param {object} properties -
 * @returns {React.Component} -
 */
export default function Provider(properties) {
	const { context, value } = properties;

	return <context.Provider value={value}>{properties.children}</context.Provider>;
}
