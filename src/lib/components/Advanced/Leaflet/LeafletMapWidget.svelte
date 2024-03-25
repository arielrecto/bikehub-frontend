<script>
	import JoyContainer from '$lib/components/Base/Container/JoyContainer.svelte';
</script>

<JoyContainer>
	<div class="landing-bg"></div>
</JoyContainer>

<style lang="postcss">
	.landing-bg {
		background-image: url('$lib/images/landing-page-bg.jpg');
		@apply bg-center bg-cover bg-no-repeat flex h-96 w-full rounded-lg;
	}
</style>
