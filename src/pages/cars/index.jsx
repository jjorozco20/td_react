import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {object} props -
 * @returns {React.Component} component
 */
export default function Cars(props) {
	return <h1>Cars</h1>;
}

Cars.propTypes = {
	title: PropTypes.string,
};
