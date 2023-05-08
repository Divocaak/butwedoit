<script>
	export let title = '';
	export let imagePath = null;
	export let hideMedia = false;
	export let blackOnWhite = false;
	export let indexBackground = false;
	import Navbar from '$lib/Navbar.svelte';
</script>

<div class="header-wrapper" class:fixed={!hideMedia}>
	{#if !hideMedia}
		{#if imagePath == null}
			<video autoplay muted loop>
				<source src="/reel.mp4" type="video/mp4" />
			</video>
		{:else}
			<img src={imagePath} alt="thumbnail" class="img-fluid" class:indexBackground />
		{/if}
	{/if}
	<div
		class="header-overlay p-4"
		class:background={hideMedia}
		class:white-on-black={!blackOnWhite}
		class:black-on-white={blackOnWhite}
		class:fixed={!hideMedia}
	>
		<Navbar {blackOnWhite} />
		{#if !hideMedia}
			<div class="overlay-content d-flex align-items-center">
				<div class="text-center w-100">
					<h1 class="display-3 text-uppercase unbounded">{title}</h1>
					<slot />
				</div>
			</div>
		{:else}
			<slot />
		{/if}
	</div>
</div>

<style>
	.header-wrapper {
		min-height: 100vh;
	}

	.header-wrapper video,
	img {
		object-fit: cover;
		position: fixed;
		height: 100%;
		width: 100%;
	}

	.header-wrapper .header-overlay {
		z-index: 2;
		width: 100%;
		height: 100%;
		color: var(--white);
		background-color: rgba(0, 0, 0, 0.5);
	}

	.header-wrapper .overlay-content {
		height: 90%;
	}

	.background {
		background-color: var(--yellow) !important;
		color: var(--black) !important;
	}

	.indexBackground {
		opacity: 0.5;
	}

	.fixed {
		background-color: var(--yellow);
		position: fixed;
		top: 0;
	}
</style>
