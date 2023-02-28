<script>
	export let last, label, shortDesc, thumbnail;
	export let onClick = () => {};
</script>

<div
	class="{last} col-12 p-0 videoCard"
	tabindex="0"
	role="button"
	on:click={onClick}
	on:keypress={onClick}
>
	<div
		class="card-background d-none d-md-flex"
		style="background-image: url('/images/thumbnails/{thumbnail}');"
	>
		<div class="card-content-holder d-flex align-items-center w-100">
			<div class="text-center w-100">
				<h2 class="unbounded">{label}</h2>
				<p class="lead roboto">{shortDesc}</p>
			</div>
		</div>
	</div>
	<div
		class="card-background card-background-small d-block d-md-none"
		style="background-image: url('/images/thumbnails/{thumbnail}');"
	>
		<div class="card-content-holder-small text-center px-2">
			<h2 class="unbounded pt-2" style="font-size: .6em;">{label}</h2>
			<p class="lead roboto pb-2" style="font-size: .6em;">{shortDesc}</p>
		</div>
	</div>
</div>

<style>
	.card-background {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		cursor: pointer;
		pointer-events: auto;
		color: var(--black);
	}

	.card-background-small {
		height: 30vh;
	}

	.card-content-holder,
	.card-content-holder-small {
		pointer-events: none;
		position: relative;
		height: 50vh;
	}

	.card-content-holder-small {
		background-color: var(--yellow);
		left: 2.5%;
		max-width: 40%;
		width: max-content;
		height: auto;
	}

	.card-content-holder {
		transition: all 0.5s;
		opacity: 0;
		background-color: var(--yellow);
	}

	.card-background:hover .card-content-holder {
		opacity: 0.9;
	}

	.card-background-effect {
		transition: all 0.5s;
		filter: saturate(0.7);
	}

	.card-background-effect:hover {
		transform: scale(1.1);
		filter: saturate(1);
	}

	.card-background-effect-wrapper {
		max-width: 100%;
		max-height: 100%;
		overflow: hidden;
	}
</style>
