import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { storiesOf } from '@storybook/react';
import Application from 'application';

const Template = (properties) => (
	<BrowserRouter basename="/">
		<Application {...properties} />
	</BrowserRouter>
);

export const Primary = Template.bind({});
Primary.storyName = 'Default';

export default {
	title: 'Application',
	component: Application,
};
