import React from 'react';
import Login from 'pages/login';
import Home from 'pages/home';
import Cars from 'pages/cars';
import Unknown from 'pages/unknown';

/**
 * @param {object} page -
 *
 * @returns {React.Component} page
 */
export default function Factory(page) {
	const { name, ...properties } = page;
	const key = (name || '').toLowerCase();

	switch (key) {
		case Home.name.toLowerCase():
			return <Home {...properties} />;
		case Cars.name.toLowerCase():
			return <Cars {...properties} />;
		case Login.name.toLowerCase():
			return <Login {...properties} />;
		default:
			return <Unknown />;
	}
}
