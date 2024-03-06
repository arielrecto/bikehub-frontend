<script lang="ts">
	import { ContainerGap } from '$lib/types/Gap';
	import { ContainerPadding } from '$lib/types/Padding';

	let clazz: string = '';

	export let padding: ContainerPadding = ContainerPadding.XS;
	export let gap: ContainerGap = ContainerGap.XS;
	export let col = false;

	export { clazz as class };

	let divClass = 'flex ';
	$: {
		if (col) {
			divClass += 'flex-col';
		}

		divClass = `${divClass} ${padding} ${gap} ${clazz}`;
	}
</script>

<div class={divClass}>
	<slot />
</div>
