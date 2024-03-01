<script lang="ts">
	import JoyButton from '$lib/components/Button/JoyButton.svelte';
	import { ButtonSize, ButtonVariant } from '$lib/components/Button/types';
	let isDefault = true;
	$: myVariant = isDefault ? ButtonVariant.GHOST : ButtonVariant.PRIMARY;
</script>

<div class="grid place-items-center h-screen w-full">
	<JoyButton
		label="my button"
		variant={myVariant}
		on:click={() => (isDefault = !isDefault)}
	/>
</div>
