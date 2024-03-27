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

	import { superForm } from 'sveltekit-superforms';
	export let data;

	import { yup } from 'sveltekit-superforms/adapters';
	import { object, string } from 'yup';
	import { goto } from '$app/navigation';

	const schema = object({
		username: string().email().required(),
		password: string().required()
	});

	const { form, errors, enhance, constraints } = superForm(data.form, {
		SPA: true,
		validators: yup(schema),
		async onUpdate({ form }) {
			console.log({ form });
		}
	});
</script>

<JoyContainer class="h-full justify-center items-center bg-primary" rounded={BorderRounded.LG}>
	<form method="POST" use:enhance>
		<JoyCard class="w-96" title="Let's Go!">
			<JoyColumn gap={ContainerGap.XS} class="my-4">
				<JoyInput
					type="email"
					name="username"
					placeholder="Username"
					bordered
					bind:value={$form.username}
					attributes={$constraints.username}
				/>
				{#if $errors.username}
					<span class="capitalize">{$errors.username}</span>
				{/if}

				<JoyInput
					type="password"
					name="password"
					placeholder="Password"
					bordered
					bind:value={$form.password}
					attributes={$constraints.password}
				/>
				{#if $errors.password}
					<span class="capitalize">{$errors.password}</span>
				{/if}
			</JoyColumn>

			<JoyRow slot="actions">
				<JoyButton
					variant={ButtonVariant.GHOST}
					label="Register"
					on:click={(event) => {
						event.preventDefault();
						goto('/register');
					}}
				/>
				<JoyButton variant={ButtonVariant.PRIMARY} label="Sign In" />
			</JoyRow>
		</JoyCard>
	</form>
</JoyContainer>
