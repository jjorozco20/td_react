import React from 'react';
import DataPages from 'data/pages.json';
import DataCars from 'data/cars.json';

export const Pages = React.createContext(DataPages);
export const Session = React.createContext({
	loggedIn: false,
	profile: {},
	start: () => {},
	end: () => {},
});
export const Cars = React.createContext(DataCars);
