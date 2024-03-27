import type { LayoutLoad } from './$types';

export const ssr = false;
export const csr = true;
export const prerender = false;

export const load: LayoutLoad = () => {
    console.log('root layout load')
};