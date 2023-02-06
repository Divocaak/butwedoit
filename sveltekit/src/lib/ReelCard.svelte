<script>
	export let yt, thumbnail, label, shortDesc, bgColor, textColor;
	/* BUG browser console */
    let thumbnailImage;
    if(thumbnail != null){
        thumbnailImage = new URL('./assets/thumbnails/' + thumbnail, import.meta.url);
    }
</script>

<div class="reel-card">
	<div
		class="card-background"
		style="background-image: url({thumbnailImage}); color: #{textColor}"
		data-youtube-id={yt}
		data-label={label}
		data-desc={shortDesc}
	>
		<div
			class="card-content-holder d-none d-md-flex align-items-center"
			style="background-color: #{bgColor}"
		>
			<div class="text-center w-100 mx-2">
				<h2>{label}</h2>
				<p class="lead">{shortDesc}</p>
			</div>
		</div>
		{#if yt != null}
			<div class="card-content-holder-small d-block d-md-none pt-2 ps-1">
				<h2><span class="p-2" style="background-color: #{bgColor}">{label}</span></h2>
				{#if shortDesc != null}
					<p class="lead">
						<span class="p-2" style="background-color: #{bgColor}">{shortDesc}</span>
					</p>
				{/if}
			</div>
		{:else}
			<div class="text-reel-content-holder d-flex d-md-none align-items-center pt-2">
				<div class="text-center w-100 px-1">
					<h2><span class="p-2 lh-base" style="background-color: #{bgColor}">{label}</span></h2>
					<p class="lead">
						<span class="p-2 lh-base" style="background-color: #{bgColor}">{shortDesc}</span>
					</p>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.reel-card .card-background .card-content-holder,
	.card-content-holder-small {
		pointer-events: none;
		position: relative;
		height: 100vh;
	}

	.text-reel-content-holder {
		position: relative;
		height: 100vh;
	}

    .card-background {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		cursor: pointer;
		pointer-events: auto;
	}

	.card-background .card-content-holder,
	.card-content-holder-small {
		pointer-events: none;
		position: relative;
		height: 50vh;
	}

	.card-background .card-content-holder {
		transition: all 0.5s;
		opacity: 0;
	}

	.card-background:hover .card-content-holder {
		opacity: 1;
	}
</style>
