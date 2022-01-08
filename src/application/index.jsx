import React, { Component, useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Router from 'application/router';
import { Pages as PageContext, Session as SessionContext } from 'contexts';
import reducer from './reducer';
import initialize from './state';
import { actions } from './enums';

// import 'semantic-ui-css/semantic.min.css';

/**
 * @param {object} properties -
 * @returns {React.Component} component
 */
export default class Application extends Component {
	static getDerivedStateFromError(error) {
		// console.log(error);
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	constructor(properties) {
		super(properties);

		this.state = { error: null };
	}

	componentDidCatch(error, info) {
		// console.log(error);
		// console.log(info);

		this.setState({
			error,
		});
	}
	// const { pathname } = useLocation();
	// const [state, dispatch] = useReducer(reducer, { ...properties }, initialize);
	// const { loggedIn } = state.session;
	// const [provider] = useState({
	// 	start: (profile) => {
	// 		dispatch({ type: actions.SetSession, payload: profile });
	// 	},
	// });
	// return <h1>HI</h1>;
	// return (
	// 	<SessionContext.Provider value={provider}>
	// 		<PageContext.Consumer>
	// 		{(pages) => <Router loggedIn={loggedIn} pages={pages} pathname={pathname} />}
	// 		</PageContext.Consumer>
	// 	</SessionContext.Provider>
	// );

	render() {
		return (
			<>
				<header></header>
				<main>
					<h1>{this.state.error && this.state.error.message}</h1>
					{!this.state.error && this.props.children}
				</main>
				<footer></footer>
			</>
		);
	}
}

Application.propTypes = {
	title: PropTypes.string,
};
Application.defaultProps = {};
