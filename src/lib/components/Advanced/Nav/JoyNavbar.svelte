<script lang="ts">
	import JoyAnchor from '$lib/components/Base/Anchor/JoyAnchor.svelte';
	import JoyButton from '$lib/components/Base/Button/JoyButton.svelte';
	import { ButtonVariant } from '$lib/components/Base/Button/types';
	import JoyRow from '$lib/components/Base/Row/JoyRow.svelte';
	import { ContainerGap } from '$lib/types/Gap';
</script>

<JoyRow class="justify-between">
	<JoyAnchor label="BikeHub" variant={ButtonVariant.GHOST} href="/" />
	<JoyRow gap={ContainerGap.XXS}>
		<JoyButton label="Profile" variant={ButtonVariant.GHOST} />
		<JoyAnchor label="Sign In" variant={ButtonVariant.GHOST} href="/sign-in" />
	</JoyRow>
</JoyRow>