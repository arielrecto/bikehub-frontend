<script lang="ts">
	import { InputSize, InputVariant } from './types';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Attributes extends HTMLInputAttributes {}
	export let attributes: Attributes | undefined = undefined

	export let placeholder: string = 'Type here';
	export let size: InputSize = InputSize.MD;
	export let variant: InputVariant = InputVariant.NEUTRAL;
	export let bordered = false;
	export let value: string | number | undefined = undefined;
	export let name: string | undefined = undefined;

	let clazz = '';
	export let type: string = 'text';
	let inputClass = '';
	export { clazz as class };

	$: {
		let buildClass = '';

		if (bordered) {
			buildClass += ' input-bordered';
		}

		inputClass = `input ${variant} ${size} ${buildClass} ${clazz}`;
	}

	const nodeType = (node: HTMLInputElement) => {
		node.type = type;
	};
</script>

<input use:nodeType {name} {placeholder} class={inputClass} bind:value {...attributes}/>