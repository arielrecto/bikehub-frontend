<script lang="ts">
	import JoyButton from '$lib/components/Base/Button/JoyButton.svelte';
	import JoyAnchor from '$lib/components/Base/Anchor/JoyAnchor.svelte';
	import { ButtonVariant } from '$lib/components/Base/Button/types';
	import JoyColumn from '$lib/components/Base/Column/JoyColumn.svelte';
	import JoyContainer from '$lib/components/Base/Container/JoyContainer.svelte';
	import JoyCard from '$lib/components/Advanced/Card/JoyCard.svelte';
	import JoyInput from '$lib/components/Base/Input/JoyInput.svelte';
	import { ContainerGap } from '$lib/types/Gap';
	import JoyRow from '$lib/components/Base/Row/JoyRow.svelte';
	import { BorderRounded } from '$lib/types/Round';
</script>

<JoyContainer class="h-full justify-center items-center bg-primary" rounded={BorderRounded.LG}>
	<JoyCard class="w-96" title="Let's Go!">
		<JoyColumn gap={ContainerGap.XS} class="my-4">
			<JoyInput placeholder="Username" bordered />
			<JoyInput type="password" placeholder="Password" bordered />
		</JoyColumn>

		<JoyRow slot="actions">
			<JoyAnchor variant={ButtonVariant.GHOST} label="Register" />
			<JoyButton variant={ButtonVariant.PRIMARY} label="Sign In" />
		</JoyRow>
	</JoyCard>
</JoyContainer>