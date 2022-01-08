import React, { useEffect, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Grid, Card, Message } from 'semantic-ui-react';
import api from 'api';
import { Session as SessionContext } from 'contexts';
import reducer from './reducer';
import initialize from './state';
import { actions, fields } from './enums';
import validate from './validate';
import './style.css';

/**
 * @param {object} properties -
 * @returns {React.Component} component
 */
export default function Login(properties) {
	const { title } = properties;
	const [state, dispatch] = useReducer(reducer, properties, initialize);
	const session = useContext(SessionContext);

	useEffect(async () => {
		if (state.logging) {
			dispatch({ type: actions.SetLogging, payload: false });

			try {
				validate(state);

				const profile = await api.login({
					username: state.username.value,
					password: state.password.value,
				});

				session.start(profile);
			} catch (error) {
				const { field } = error;

				if (fields.Username === field) {
					dispatch({ type: actions.SetUsername, payload: { error } });
				} else if (fields.Password === field) {
					dispatch({ type: actions.SetPassword, payload: { error } });
				} else {
					dispatch({ type: actions.SetError, payload: error });
				}
			}
		}
	}, [state.logging]);

	return (
		<Grid centered stretched verticalAlign={'middle'} columns={4} className="login">
			<Grid.Column>
				<Card centered fluid>
					<Card.Content>
						<Card.Header as="h2">{title}</Card.Header>
						<Form
							noValidate
							loading={state.logging}
							error={!!state.error}
							onSubmit={() => {
								dispatch({ type: actions.SetLogging, payload: true });
							}}
						>
							<Form.Field
								required
								control={Input}
								icon="user"
								iconPosition="left"
								placeholder="User or Email"
								value={state.username.value}
								error={!!state.username.error}
								onChange={(event, data) => {
									const { value } = data;

									event.preventDefault();
									dispatch({ type: actions.SetUsername, payload: { value } });
									dispatch({ type: actions.SetError, payload: null });
								}}
							/>
							<Form.Field
								required
								control={Input}
								icon="lock"
								iconPosition="left"
								placeholder="Password"
								type="password"
								value={state.password.value}
								error={!!state.password.error}
								onChange={(event, data) => {
									const { value } = data;

									event.preventDefault();
									dispatch({ type: actions.SetPassword, payload: { value } });
									dispatch({ type: actions.SetError, payload: null });
								}}
							/>
							{!!state.error && <Message error content={state.error.message} />}
							<Form.Button primary fluid content="Login" />
						</Form>
					</Card.Content>
				</Card>
			</Grid.Column>
		</Grid>
	);
}

Login.propTypes = {
	title: PropTypes.string,
};
