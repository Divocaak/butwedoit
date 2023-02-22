<script>
	import ImageCard from '$lib/ImageCard.svelte';
	import EventMoreButton from '$lib/EventMoreButton.svelte';

	export let odd, thumbnail, label, desc, eventType, id;
</script>

<div class="row projectHolder p-0 m-0 d-none d-md-flex my-5">
	{#if odd}
		<ImageCard filename={thumbnail} />
	{/if}

	<div class="col-12 col-md-6 d-flex align-items-center">
		<div class="w-100 px-3 px-md-5">
			<h2 class="unbounded">{label}</h2>
			<p class="lead roboto">{desc}</p>
			<EventMoreButton {eventType} {id} />
		</div>
	</div>

	{#if !odd}
		<ImageCard filename={thumbnail} />
	{/if}
</div>

<div class="d-block d-md-none mb-5">
	<div class="thumbnail" style="background-image: url('/images/thumbnails/{thumbnail}');" />
	<div class="pt-2 px-3">
		<h2 class="unbounded">{label}</h2>
		<p class="lead roboto">{desc}</p>
		<EventMoreButton {eventType} {id} />
	</div>
</div>

<style>
	.projectHolder {
		position: relative;
		width: 100vw;
		height: 50vh;
		background-color: var(--white);
		color: var(--black);
	}
	.thumbnail {
		position: relative;
		height: 33vh;
		width: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
