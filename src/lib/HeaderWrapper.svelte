<script>
	export let title,
		imagePath = null;
	export let hideMedia,
		blackOnWhite = false;
	import Navbar from '$lib/Navbar.svelte';
</script>

<div class="header-wrapper">
	{#if !hideMedia}
		{#if imagePath == null}
			<video autoplay muted loop>
				<source src="/reel.mp4" type="video/mp4" />
			</video>
		{:else}
			<img src="/images/thumbnails/{imagePath}" alt="thumbnail" class="img-fluid" />
		{/if}
	{/if}
	<div
		class="header-overlay"
		class:background={hideMedia}
		class:white-on-black={!blackOnWhite}
		class:black-on-white={blackOnWhite}
	>
		<Navbar {blackOnWhite} />
		{#if !hideMedia}
			<div class="overlay-content d-flex align-items-center">
				<div class="text-center w-100">
					<h1 class="display-1 text-uppercase unbounded">{title}</h1>
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
		position: fixed;
		top: 0;
		height: 100vh;
		height: 100vw;
	}

	.header-wrapper video {
		object-fit: cover;
		position: fixed;
		height: 100%;
		width: 100%;
	}

	.header-wrapper .header-overlay {
		position: fixed;
		z-index: 2;
		top: 0;
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
</style>
