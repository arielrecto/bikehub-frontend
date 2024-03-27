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

	import { yup } from 'sveltekit-superforms/adapters';
	import { type UseAuth } from '$lib/modules/auth/composables/useAuth';
	import useAuthRepo from '$lib/modules/auth/composables/useAuthRepo';
	import useService from '$lib/composables/useService.js';
	import { goto } from '$app/navigation';
	import type { Writable } from 'svelte/store';
	import type { User } from '$lib/modules/auth/types.js';
	import { ServiceKey } from '$lib/services/service.js';

	export let data;
	const { get } = useService();
	const { userRegister } = useAuthRepo();

	const auth = get<UseAuth>(ServiceKey.USER);

	const { form, errors, enhance, constraints } = superForm(data.form, {
		SPA: true,
		validators: yup(data.schema),
		async onUpdate({ form }) {
			if (form.valid) {
				userRegister(form.data)
					.then((response) => {
						auth.user.set(response.data.user);
						auth.token.set(response.data.token);
						auth.isAuth.set(true)
						goto('/home');
					})
					.catch((response) => console.log({ response }));
			}
		}
	});
</script>

<JoyContainer class="h-full justify-center items-center bg-primary" rounded={BorderRounded.LG}>
	<form method="POST" use:enhance>
		<JoyCard class="w-96" title="Register">
			<JoyColumn gap={ContainerGap.XS} class="my-4">
				<JoyInput
					type="text"
					name="name"
					placeholder="Name"
					bordered
					bind:value={$form.name}
					attributes={$constraints.name}
				/>
				{#if $errors.name}
					<span class="capitalize">{$errors.name}</span>
				{/if}

				<JoyInput
					type="email"
					name="email"
					placeholder="Email"
					bordered
					bind:value={$form.email}
					attributes={$constraints.email}
				/>
				{#if $errors.email}
					<span class="capitalize">{$errors.email}</span>
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

				<JoyInput
					type="password"
					name="password_confirmation"
					placeholder="Confirm Password"
					bordered
					bind:value={$form.password_confirmation}
					attributes={$constraints.password_confirmation}
				/>
				{#if $errors.password_confirmation}
					<span class="capitalize">{$errors.password_confirmation}</span>
				{/if}
			</JoyColumn>

			<JoyRow slot="actions">
				<JoyButton
					variant={ButtonVariant.GHOST}
					label="Sign in instead"
					on:click={(event) => {
						event.preventDefault();
						goto('/sign-in');
					}}
				/>
				<JoyButton variant={ButtonVariant.PRIMARY} label="Register" />
			</JoyRow>
		</JoyCard>
	</form>
</JoyContainer>
