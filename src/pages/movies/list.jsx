import React from 'react';
import Item from './item';

/**
 * @param properties
 */
export default function List(properties) {
	const { value = [] } = properties;
	const items = value.map((item) => <Item key={item.id} value={item} />);

	return <ul>{items}</ul>;
}
