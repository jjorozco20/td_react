import React from 'react';

/**
 * @param properties
 */
export default function MovieItem(properties) {
	const { value = {} } = properties;

	return <li>{value.name}</li>;
}
