<script>
    export let title;
    import video from '$lib/assets/reel.mp4';
	import Navbar from '$lib/Navbar.svelte';
</script>

<div class="header-wrapper">
	<video autoplay muted loop id="myVideo">
		<source src="{video}" type="video/mp4" />
	</video>
	<div class="header-overlay">
		<Navbar></Navbar>
		<div class="overlay-content d-flex align-items-center">
			<div class="text-center w-100">
				<h1 class="display-1 text-uppercase">{title}</h1>
                <!-- TODO btn component -->
				<p class="lead">Check out <a href="#reelCarousel"><u>Reels (Shorts)</u></a> too</p>
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

	.header-wrapper video{
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
