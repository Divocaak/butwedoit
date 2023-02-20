<script>
	import HeaderWrapper from '$lib/HeaderWrapper.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import Footer from '$lib/Footer.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let imgs = Array.from(Array(3), () => new Array());
	let currIndex = 0;
	data.gallery.forEach((element) => {
		imgs[currIndex].push(element);
		currIndex = currIndex == 2 ? 0 : currIndex + 1;
	});
</script>

<HeaderWrapper title={data.label} imagePath={data.thumbnail}/>
<ContentWrapper blackOnWhite={true}>
	<div class="text-center">
		<p class="lead roboto my-5 pt-5">{data.detailLongDesc}</p>
	</div>
	<div class="gal-cont px-md-5 mx-md-5">
		<!-- BUG not all events work (HBO), some of them have missing gallery -->
		{#each imgs as galCol}
			<div class="gal-col">
				{#each galCol as img}
					<img src="/images/{img}" alt={img} />
				{/each}
			</div>
		{/each}
	</div>
	<!-- TODO prev and next event btns -->
	<Footer />
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
