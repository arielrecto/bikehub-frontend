<script lang="ts">
    import { ButtonSize, ButtonVariant } from "./types.ts"
	export let label: string = 'Button';
    export let size: ButtonSize = ButtonSize.MD
    export let variant: ButtonVariant = ButtonVariant.NEUTRAL 
    export let plain: boolean = false
    export let outline: boolean = false
    let clazz = ''
    export { clazz as class }

    $: btnClass = `${!plain && 'btn'} ${outline && 'btn-outline'} ${variant} ${size} ${clazz}`
</script>

<button class={btnClass} on:click>
	{label}
</button>