<script>
	import JoyContainer from '$lib/components/Base/Container/JoyContainer.svelte';
	import { ContainerPadding } from '$lib/types/Padding';
	import 'tailwindcss/tailwind.css';
</script>

<JoyContainer padding={ContainerPadding.XL} class="flex-col">
	<slot />
</JoyContainer>