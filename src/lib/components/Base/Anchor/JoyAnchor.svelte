<script lang="ts">
    import { ButtonSize, ButtonVariant } from "$lib/components/Base/Button/types"
	export let label: string = 'Button';
    export let size: ButtonSize = ButtonSize.MD
    export let variant: ButtonVariant | undefined = undefined 
    export let plain: boolean = false
    export let outline: boolean = false
    let clazz = ''
    export let href = '#'
    export { clazz as class }

    $: btnClass = `${!plain && 'btn'} ${outline && 'btn-outline'} ${size} ${variant} ${clazz}`
</script>

<a class={btnClass} {href}>
	{label}
</a>