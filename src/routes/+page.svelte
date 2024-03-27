<script lang="ts">
	import MapWidget from '$lib/components/Advanced/Leaflet/LeafletMapWidget.svelte';
	import JoyContainer from '$lib/components/Base/Container/JoyContainer.svelte';
	import JoyRow from '$lib/components/Base/Row/JoyRow.svelte';
	import { ContainerPadding } from '$lib/types/Padding';
</script>

<!-- @TODO Leaflet Map -->
<MapWidget />

<!-- Posts Container -->
<JoyContainer col padding={ContainerPadding.LG}>
	<!-- @TODO: extract this to Post Component -->
	{#each Array(10) as _}
		<JoyContainer col padding={ContainerPadding.MD} class="h-36 bg-base-100 shadow-lg rounded-md">
			<p class="font-semibold text-ellipsis">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt numquam illum at ut,
				perspiciatis itaque?
			</p>
			<p class="font-semibold text-xs text-accent">Lorem ipsum dolor sit amet.</p>

			<JoyRow>
				<div class="badge">default</div>
				<div class="badge badge-neutral">neutral</div>
				<div class="badge badge-primary">primary</div>
				<div class="badge badge-secondary">secondary</div>
				<div class="badge badge-accent">accent</div>
				<div class="badge badge-ghost">ghost</div>
			</JoyRow>

			<div class="flex gap-2"></div>
		</JoyContainer>
	{/each}
</JoyContainer>