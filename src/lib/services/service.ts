import { getContext, setContext } from 'svelte';

export enum ServiceKey {
	USER = 'user',
 }

export function setService<T>(key: ServiceKey, service: T): T {
	setContext(key, service);
	return service;
}

export function getService<T>(key: ServiceKey): () => T {
	return () => getContext(key) as T;
}

export function defineService<T>(key: ServiceKey): [() => T, (service: T) => T] {
	return [
		getService<T>(key),
		(service: T) => {
			setService(key, service);
			return service;
		}
	];
}
