import React from 'react';
import Renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Application from 'application';

/**
 * @param {object} properties -
 * @returns {React.Component} root
 */
function render(properties) {
	let instance;

	Renderer.act(() => {
		instance = Renderer.create(
			<MemoryRouter>
				<Application {...properties} />
			</MemoryRouter>
		);
	});

	return instance;
}

describe('application', () => {
	it('should render the application with default properties', () => {
		const instance = render();
		const application = instance.root.findByType(Application);

		expect(instance).toBeDefined();
		expect(application).toBeDefined();
	});
});
