<script lang="ts">
    import { ButtonSize, ButtonVariant } from "./types.ts"
	export let label: string = 'Button';
    export let size: ButtonSize = ButtonSize.MD
    export let variant: ButtonVariant | undefined = undefined 
    export let plain: boolean = false

    $: btnClass = `${!plain && 'btn'} ${size} ${variant}`
</script>

<button class={btnClass} on:click>
	{label}
</button>