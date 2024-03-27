import useHttp from '$lib/composables/useHttp';
import type { HttpResponse } from '$lib/services/http';
import { type User, type UserRegisterPayload, type UserRegisterResponse } from '../types';

export default () => {
	const { http } = useHttp();

	const attachHeaders = (token: string) => ({
					headers: {
						Authorization: `Bearer ${token}`,
						Accept: 'application/json'
					}
				})

	const userRegister = async (
		data: UserRegisterPayload
	): Promise<HttpResponse<UserRegisterResponse>> => {
		return new Promise((resolve, reject) => {
			http
				.post<UserRegisterResponse>('/register', data)
				.then((response) => resolve(response))
				.catch((response) => reject(response));
		});
	};

	const getUser = async (token: string): Promise<HttpResponse<User>> => {
		return new Promise((resolve, reject) => {
			http
				.get<User>('/user', attachHeaders(token))
				.then((response) => resolve(response))
				.catch((response) => reject(response));
		});
	};

	const logoutUser = async (token: string): Promise<HttpResponse> => {
		return new Promise((resolve) => {
			http
				.delete('/logout', attachHeaders(token))
				.then((response) => resolve(response))
		});
	};

	return {
		userRegister,
		logoutUser,
		getUser
	};
};
