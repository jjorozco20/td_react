import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {object} props -
 * @returns {React.Component} component
 */
export default function Home(props) {
	return <h1>Home</h1>;
}

Home.propTypes = {
	title: PropTypes.string,
};
