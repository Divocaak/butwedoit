<script>
	export let last, label, shortDesc, thumbnail, textColor, bgColor;
	export let onClick = () => {};
	/* BUG browser console */
	let thumbnailImage = new URL('./assets/thumbnails/' + thumbnail, import.meta.url);
</script>

<div
	class="{last} col-12 p-0 videoCard"
	style="color: #{textColor}"
	tabindex=0
	role="button"
	on:click={onClick}
	on:keypress={onClick}
>
	<div class="card-background d-none d-md-flex" style="background-image: url({thumbnailImage});">
		<div
			class="card-content-holder d-flex align-items-center w-100"
			style="background-color: #{bgColor}"
		>
			<div class="text-center w-100">
				<h2>{label}</h2>
				<p class="lead">{shortDesc}</p>
			</div>
		</div>
	</div>
	<div
		class="card-background card-background-small d-block d-md-none"
		style="background-image: url({thumbnailImage});"
	>
		<div class="card-content-holder-small pt-2 px-3">
			<h2><span class="p-2 lh-base" style="background-color: #{bgColor}">{label}</span></h2>
			<p class="lead">
				<span class="p-2 lh-base" style="background-color: #{bgColor}">{shortDesc}</span>
			</p>
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
	}

	.card-background-small {
		height: 46vh;
	}

	.card-background .card-content-holder,
	.card-content-holder-small {
		pointer-events: none;
		position: relative;
		height: 50vh;
	}

	.card-background .card-content-holder-detail-image {
		position: relative;
		height: 33vh;
	}

	.card-background .card-content-holder-detail-image-last-and-new {
		position: relative;
		height: 100vh;
	}

	.card-background .card-content-holder {
		transition: all 0.5s;
		opacity: 0;
	}

	.card-background:hover .card-content-holder {
		opacity: 1;
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
