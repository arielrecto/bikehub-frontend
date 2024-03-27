<script lang="ts">
	import JoyContainer from '$lib/components/Base/Container/JoyContainer.svelte';
	import JoyNavbar from '$lib/components/Advanced/Nav/JoyNavbar.svelte';
	import { ContainerPadding } from '$lib/types/Padding';
	import 'tailwindcss/tailwind.css';

	import useAuth from '$lib/modules/auth/composables/useAuth';
	import useAuthRepo from '$lib/modules/auth/composables/useAuthRepo';

	const { getUser } = useAuthRepo();
	import useService from '$lib/composables/useService';
	const { set } = useService();
	import { ServiceKey } from '$lib/services/service';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	const authService = set(ServiceKey.USER, useAuth());

	onMount(() => {
		authService.loadData();
		authService.saveData();
		
		const token = get(authService.token)

		if (token) {
			getUser(token)
				.then((response) => authService.user.set(response.data))
				.catch(console.log);
		}
	});
</script>

<JoyContainer padding={ContainerPadding.MD} col class="h-screen overflow-scroll">
	<JoyNavbar />
	<slot />
</JoyContainer>
