<script>
	import Background from '$lib/Background.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let imgs = Array.from(Array(3), () => new Array());
	let currIndex = 0;
	data.gallery.forEach((element) => {
		imgs[currIndex].push(element);
		currIndex = currIndex == 2 ? 0 : currIndex + 1;
	});
</script>

<Background title={data.label} imagePath={data.thumbnail} />
<ContentWrapper>
	<div class="text-center">
		<p class="lead">{data.detailLongDesc}</p>
	</div>
	<div class="gal-cont px-md-5 mx-md-5">
		{#each imgs as galCol}
			<div class="gal-col">
				{#each galCol as img}
					<img src="/images/{img}" alt={img} />
				{/each}
			</div>
		{/each}
	</div>
</ContentWrapper>

<style>
	.gal-cont {
		display: flex;
		flex-wrap: wrap;
		padding: 0 4px;
	}

	.gal-col {
		flex: 33%;
		max-width: 33%;
		padding: 0 4px;
	}

	.gal-col img {
		margin-top: 8px;
		vertical-align: middle;
		width: 100%;
	}

	@media screen and (max-width: 800px) {
		.gal-col {
			flex: 100%;
			max-width: 100%;
		}
	}
</style>
