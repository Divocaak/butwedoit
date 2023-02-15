<script>
	import 'bootstrap/dist/css/bootstrap.min.css';
	import 'bootstrap/dist/js/bootstrap.min.js';
	import 'bootstrap-icons/font/bootstrap-icons.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Roboto:wght@300;400;500&family=Unbounded:wght@400;500;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<slot />

<style lang="scss">
	:root {
		--black: black;
		--white: white;
		--yellow: #f9d204;
		/* NOTE oznámit */
		/* --yellow: #fce205; */
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		background-color: var(--black);
		color: var(--white);
	}

	:global(a) {
		text-decoration: none;
		color: var(--white);
		transition: all ease-in-out 0.25s;
	}

	:global(a:hover) {
		color: var(--yellow);
	}

	:global(.btn-bigger) {
		font-size: 2rem;
	}

	:global(.montserrat) {
		font-family: 'Montserrat', sans-serif;
	}

	:global(.roboto) {
		font-family: 'Roboto', sans-serif;
	}

	:global(.unbounded){
		font-family: 'Unbounded', cursive;
	}
</style>
