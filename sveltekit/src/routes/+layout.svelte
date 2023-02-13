<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
	<!-- TODO bootstrap from cdn or otherwise -->
	<link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css" />
    <script src="../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
	/>
</svelte:head>

<slot />

<style lang="scss">
	:root {
		--black: black;
		--white: white;
		--yellow: #fce205;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		background-color: var(--black);
		color: var(--white);
	}

	:global(a,
	i) {
		text-decoration: none;
		color: var(--white);
		transition: all ease-in-out 0.25s;
	}

	:global(a:hover) {
		color: var(--yellow);
	}

	:global(a:hover i) {
		color: var(--yellow);
	}

	:global(.btn-bigger) {
		font-size: 2rem;
	}
</style>
