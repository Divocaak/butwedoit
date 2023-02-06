<div class="content-wrapper"><slot /></div>

<style>
	.content-wrapper {
		position: relative;
		top: 100vh;
		min-height: 100vh;
		background-color: var(--black);
	}

	/* TODO used? */
	.content-wrapper-first {
		-webkit-box-shadow: 0px 5px 25px 5px rgba(252, 226, 5, 1);
		-moz-box-shadow: 0px 5px 25px 5px rgba(252, 226, 5, 1);
		box-shadow: 0px 5px 25px 5px rgba(252, 226, 5, 1);
	}
</style>
