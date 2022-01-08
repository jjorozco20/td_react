import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Sidebar } from 'semantic-ui-react';

/**
 * @param {object} properties -
 * @returns {React.Component} component
 */
export default function Layout(properties) {
	const { value } = properties;
	const links = value.map((item) => (
		<Link
			key={item.name}
			to={`${item.path}`}
			component={React.forwardRef(function Item({ navigate, ...props }, ref) {
				return <Menu.Item ref={ref} {...props} />;
			})}
			content={item.name}
			icon={item.icon}
		/>
	));

	return (
		<Sidebar.Pushable as={Segment}>
			<Sidebar as={Menu} inverted vertical visible width="thin" direction="left" icon="labeled">
				{links}
			</Sidebar>
			<Sidebar.Pusher>{properties.children}</Sidebar.Pusher>
		</Sidebar.Pushable>
	);
}
