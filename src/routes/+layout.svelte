<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.min.js';
	import "bootstrap-icons/font/bootstrap-icons.css";
</script>

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
