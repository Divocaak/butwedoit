<script>
	import ImageCard from '$lib/ImageCard.svelte';

	export let odd, thumbnail, label, shortDesc, bgColor, textColor;

	// TODO redirect
	/* $('.detailBtn,.thumbnailBtn').click(function () {
		$.redirectPost('detail.php', {
			thumbnail: $(this).data('thumbnail'),
			label: $(this).data('label'),
			desc: $(this).data('desc'),
			longDesc: $(this).data('longDesc'),
			galPath: $(this).data('galPath')
		});
	}); */
</script>

<div class="row projectHolder p-0 m-0 d-none d-md-flex">
	{#if odd}
		<ImageCard filename={thumbnail} />
	{/if}

	<div
		class="col-12 col-md-6 d-flex align-items-center"
		style="background-color: #{bgColor}; color: #{textColor}"
	>
		<div class="text-center w-100 px-3 px-md-5">
			<h2>{label}</h2>
			<p class="lead">{shortDesc}</p>
			<p class="detailBtn">MORE</p>
		</div>
	</div>

	{#if !odd}
		<ImageCard filename={thumbnail} />
	{/if}
</div>

<div class="p-0 d-block d-md-none">
	<div
		class="thumbnail thumbnailBtn"
		style="background-image: url(\'imgs/thumbnails/{thumbnail}\');"
	>
		<div class="card-content-holder-small pt-2 px-3">
			<h2>
				<span class="p-2 lh-base" style="background-color: #{bgColor}; color: #{textColor}"
					>{label}</span
				>
			</h2>
			<p class="lead">
				<span class="p-2 lh-base" style="background-color: #{bgColor}; color: #{textColor}"
					>{shortDesc}</span
				>
			</p>
		</div>
	</div>
</div>

<style>
	.detailBtn {
		text-decoration: none;
		color: var(--white);
		transition: all ease-in-out 0.25s;
		cursor: pointer;
	}

	.detailBtn:hover {
		color: var(--yellow);
	}

	.projectHolder {
		position: relative;
		width: 100vw;
		height: 50vh;
	}
</style>
