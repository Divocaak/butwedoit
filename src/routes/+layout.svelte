<script>
	import 'bootstrap/dist/css/bootstrap.min.css';
	import 'bootstrap/dist/js/bootstrap.min.js';
	import 'bootstrap-icons/font/bootstrap-icons.css';
	import Analytics from '$lib/Analytics.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Roboto:wght@300;400;500&family=Unbounded:wght@400;500;700;800&display=swap"
		rel="stylesheet"
	/>
	<meta
		name="description"
		content="BUT WE DO IT is a video agency & production service company. Let Us Create Amazing Commercials & Turn Them Into Leads. Crafted Scripts, Production and Advertising for Online & TV. Covers everything from film permits and location scout services to local production support."
	/>
</svelte:head>

<slot />
<Analytics />

<style lang="scss">
	:root {
		--black: black;
		--white: white;
		--yellow: #f9d204;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		background-color: var(--black);
		color: var(--white);
	}

	:global(.montserrat) {
		font-family: 'Montserrat', sans-serif;
	}

	:global(.roboto) {
		font-family: 'Roboto', sans-serif;
	}

	:global(.unbounded) {
		font-family: 'Unbounded', cursive;
	}

	:global(.black-on-white) {
		color: var(--black);
		background-color: var(--white);
	}

	:global(.white-on-black) {
		color: var(--white);
		background-color: var(--black);
	}
</style>
