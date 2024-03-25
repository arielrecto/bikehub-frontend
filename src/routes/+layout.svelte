<script>
	import JoyContainer from '$lib/components/Base/Container/JoyContainer.svelte';
	import JoyNavbar from '$lib/components/Advanced/Nav/JoyNavbar.svelte';
	import { ContainerPadding } from '$lib/types/Padding';
	import 'tailwindcss/tailwind.css';
</script>

<JoyContainer padding={ContainerPadding.MD} col class="h-screen overflow-scroll">
	<JoyNavbar />
	<slot />
</JoyContainer>
