<script>
	export let title;
	export let imagePath = null;
	import Navbar from '$lib/Navbar.svelte';
</script>

<div class="header-wrapper">
	{#if imagePath == null}
		<video autoplay muted loop>
			<source src="/reel.mp4" type="video/mp4" />
		</video>
	{:else}
		<img src="/images/thumbnails/{imagePath}" alt="thumbnail" class="img-fluid"/>
	{/if}
	<div class="header-overlay">
		<Navbar />
		<div class="overlay-content d-flex align-items-center">
			<div class="text-center w-100">
				<h1 class="display-1 text-uppercase">{title}</h1>
				<slot />
			</div>
		</div>
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
</style>
