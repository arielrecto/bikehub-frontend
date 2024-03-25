<script lang="ts">
	import { InputSize, InputVariant } from './types';

	export let placeholder: string = 'Type here';
	export let size: InputSize = InputSize.MD;
	export let variant: InputVariant = InputVariant.NEUTRAL;
	export let bordered = false;

	let clazz = '';
	export let type = 'text';
	let inputClass = '';
	export { clazz as class };

	$: {
		let buildClass = '';

		if (bordered) {
			buildClass += ' input-bordered';
		}

		inputClass = `input ${variant} ${size} ${buildClass} ${clazz}`;
	}
</script>

<input {type} {placeholder} class={inputClass} />
