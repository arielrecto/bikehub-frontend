<script lang="ts">
	import { ContainerGap } from '$lib/types/Gap';
	import { ContainerPadding } from '$lib/types/Padding';

	let clazz: string = '';

	export let padding: ContainerPadding = ContainerPadding.NONE;
	export let gap: ContainerGap = ContainerGap.XS;

	export { clazz as class };

	let divClass = 'flex ';
	$: {
		divClass = `${divClass} ${padding} ${gap} ${clazz}`;
	}
</script>

<div class={divClass}>
	<slot />
</div>
