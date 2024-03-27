import useAuth from '$lib/modules/auth/composables/useAuth';
import type { PageLoad } from './$types';

const { user } = useAuth();

export const load: PageLoad = async () => {
	return { user };
};
