import { Action } from 'history';

const key = '@movies';

export const Actions = {
	load: `${key}/load`,
	loading: `${key}/loading`,
	create: `${key}/create`,
	update: `${key}/update`,
	delete: `${key}/delete`,
	read: `${key}/read`,
	error: `${key}/error`,
};
