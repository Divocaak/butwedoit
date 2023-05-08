<script>
	export let href
	export let classes=null;
    export let blackOnWhite, yellow=false;
</script>

<a {href} class={classes} class:black-on-white={blackOnWhite} class:yellow-base={yellow}>
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
	}

	.black-on-white:hover {
		color: var(--yellow);
		--_p: 100%;
	}

	.yellow-base{
		color: var(--yellow);
		--c: var(--yellow);
	}

	.yellow-base:hover {
		color: var(--black);
		--_p: 100%;
	}
</style>
