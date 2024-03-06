<script lang="ts">
	import JoyContainer from '$lib/components/Base/Container/JoyContainer.svelte';
	import { ContainerPadding } from '$lib/types/Padding';
</script>

<!-- @TODO Leaflet Map -->
<!-- Move to another component -->
<div class="landing-bg"></div>

<!-- Posts Container -->
<JoyContainer col padding={ContainerPadding.LG}>
	<!-- @TODO: extract this to Post Component -->
	{#each Array(10) as _}
		<JoyContainer
			col
			padding={ContainerPadding.MD}
			class="h-36 bg-base-100 shadow-lg rounded-md"
		>
			<p class="font-semibold text-ellipsis">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam illum at ut,
				perspiciatis itaque?
			</p>
			<p class="font-semibold text-xs text-accent">Lorem ipsum dolor sit amet.</p>
			<div class="flex gap-2">
				<div class="badge">default</div>
				<div class="badge badge-neutral">neutral</div>
				<div class="badge badge-primary">primary</div>
				<div class="badge badge-secondary">secondary</div>
				<div class="badge badge-accent">accent</div>
				<div class="badge badge-ghost">ghost</div>
			</div>
		</JoyContainer>
	{/each}
</JoyContainer>

<style lang="postcss">
	.landing-bg {
		background-image: url('$lib/images/landing-page-bg.jpg');
		@apply bg-center bg-cover bg-no-repeat flex h-96 rounded-lg bg-primary;
	}
</style>
