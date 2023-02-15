<script>
	export let blackOnWhite = false;
</script>

<div
	class="content-wrapper"
	class:white-on-black={!blackOnWhite}
	class:black-on-white={blackOnWhite}
>
	<slot />
</div>

<style>
	.content-wrapper {
		position: relative;
		top: 100vh;
		min-height: 100vh;
	}

	.black-on-white {
		color: var(--black);
		background-color: var(--white);
	}

	.white-on-black {
		color: var(--white);
		background-color: var(--black);
	}
</style>
