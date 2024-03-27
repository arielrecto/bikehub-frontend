<script lang="ts">
	import JoyAnchor from '$lib/components/Base/Anchor/JoyAnchor.svelte';
	import JoyButton from '$lib/components/Base/Button/JoyButton.svelte';
	import { ButtonVariant } from '$lib/components/Base/Button/types';
	import JoyRow from '$lib/components/Base/Row/JoyRow.svelte';
	import useService from '$lib/composables/useService';
	import useAuthRepo from '$lib/modules/auth/composables/useAuthRepo';
	import type { UseAuth } from '$lib/modules/auth/composables/useAuth';
	import { ServiceKey } from '$lib/services/service';
	import { ContainerGap } from '$lib/types/Gap';
	import useLocalStorage from '$lib/composables/useLocalStorage';

	const { get } = useService();
	const { logoutUser } = useAuthRepo();
	const { save } = useLocalStorage()

	const { isAuth, token } = get<UseAuth>(ServiceKey.USER);

	async function logout() {
		if (!$token) return;

		await logoutUser($token);
		['user','token','isAuth'].map((k) => save(k, null))
	}
</script>

<JoyRow class="justify-between">
	<JoyAnchor label="BikeHub" variant={ButtonVariant.GHOST} href="/" />
	<JoyRow gap={ContainerGap.XXS}>
		{#if !$isAuth}
			<JoyAnchor label="Sign In" variant={ButtonVariant.PRIMARY} href="/sign-in" />
		{:else}
			<JoyButton label="Sign Out" variant={ButtonVariant.NEUTRAL} on:click={logout}/>
		{/if}
	</JoyRow>
</JoyRow>
