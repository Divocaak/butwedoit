<script>
	export let href, classes;
    export let blackOnWhite=false;
</script>

<!-- TODO check all asigned classes (padding x) -->
<a {href} class={classes} class:black-on-white={blackOnWhite}>
	<slot />
</a>

<style>
	a {
		color: var(--white);
		--c: var(--yellow);

		text-decoration: none;
		background: linear-gradient(90deg, #fff 50%, var(--c) 0) calc(100% - var(--_p, 0%)) / 200% 100%,
			linear-gradient(var(--c) 0 0) 0% 100% / var(--_p, 0%) 100% no-repeat;
		-webkit-background-clip: text, padding-box;
		background-clip: text, padding-box;
		transition: 0.5s;
	}

	a:hover {
		color: var(--black);

		--_p: 100%;
	}

	.black-on-white{
		color: var(--black);
		--c: var(--black);

		text-decoration: none;
		background: linear-gradient(90deg, #fff 50%, var(--c) 0) calc(100% - var(--_p, 0%)) / 200% 100%,
			linear-gradient(var(--c) 0 0) 0% 100% / var(--_p, 0%) 100% no-repeat;
		-webkit-background-clip: text, padding-box;
		background-clip: text, padding-box;
		transition: 0.5s;
	}

	.black-on-white:hover {
		color: var(--yellow);

		--_p: 100%;
	}
</style>
