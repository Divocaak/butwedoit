<script>
	export let eventType, id;
</script>

<a href="/detail/events/{eventType}x{id}">
	MORE
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="32"
		height="16"
		fill="currentColor"
		class="bi bi-arrow-right ms-2"
		viewBox="0 4 16 8"
	>
		<path
			fill-rule="evenodd"
			d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
		/>
	</svg>
</a>

<style>
	a {
		font-family: 'Unbounded', cursive;
		text-decoration: none;
		color: var(--black);

		border-radius: 0.5em;
		padding: 0.5em 1rem 0.5em 1em;
		border: 2px solid var(--yellow);

		transition: all ease-in-out 0.25s;
	}

	a:hover {
		color: var(--white);
		background-color: var(--yellow);
		padding: 0.7em 1.2em 0.7em 1.2em;
	}
</style>
