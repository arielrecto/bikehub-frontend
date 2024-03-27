import { writable, type Writable } from 'svelte/store';
import { type User } from '../types';
import useLocalStorage from '$lib/composables/useLocalStorage';

export interface UseAuth {
	user: Writable<User | null>;
	token: Writable<string | null>;
	isAuth: Writable<boolean | null>;
	loadData: () => void;
	saveData: () => void;
}

export default () => {
	const { save, load } = useLocalStorage();
	const user = writable<User | null>(null);
	const token = writable<string | null>(null);
	const isAuth = writable<boolean | null>(false);

	const saveData = () => {
		user.subscribe((user) => {
			save<User | null>('user', user);
		});
		token.subscribe((token) => {
			save<string | null>('token', token);
		});
		isAuth.subscribe((isAuth) => {
			save<boolean | null>('isAuth', isAuth);
		});
	};

	const loadData = () => {
		user.set(load<User>('user'));
		token.set(load<string>('token'));
		isAuth.set(load<boolean>('isAuth'));
	};

	return {
		isAuth,
		token,
		user,
		loadData,
		saveData
	};
};
