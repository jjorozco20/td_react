// import React from 'react';
// import PropTypes from 'prop-types';
// import { Sidebar, Menu, Icon } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';

// export default function AppSidebar(props) {
// 	const { items } = props;

// 	const menuItems = items.map((item) => (
// 		<Menu.Item
// 			key={item.id}
// 			as={({ className }) => (
// 				<Link to={item.path || '/'} className={className}>
// 					<Icon name={item.icon} />
// 					{item.name}
// 				</Link>
// 			)}
// 		/>
// 	));

// 	return <Sidebar as={Menu} visible vertical width="thin" content={menuItems} />;
// }

// AppSidebar.propTypes = {
// 	items: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.number,
// 			name: PropTypes.string,
// 			path: PropTypes.string,
// 			icon: PropTypes.string,
// 		})
// 	),
// };

// AppSidebar.defaultProps = {
// 	items: [],
// };
