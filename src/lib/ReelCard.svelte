<script>
	export let thumbnail, label, shortDesc, onClick;

	var p0x, p0y;
	function onMouseDown(e) {
		p0x = e.pageX;
		p0y = e.pageY;
	}

	function onMouseUp(e) {
		var p1x = e.pageX;
		var p1y = e.pageY;
		if (Math.sqrt(Math.pow(p1x - p0x, 2) + Math.pow(p1y - p0y, 2)) < 4) {
			onClick();
		}
	}
</script>

<div
	class="reel-card"
	tabindex="0"
	role="button"
	on:mousedown={onMouseDown}
	on:mouseup={onMouseUp}
	on:keypress={onClick}
>
	<div class="card-background" style="background-image: url('/images/thumbnails/{thumbnail}');">
		<div class="card-content-holder d-none d-md-flex align-items-center">
			<div class="text-center w-100 mx-2">
				<h2 class="unbounded">{label}</h2>
				<p class="lead roboto">{shortDesc}</p>
			</div>
		</div>
		<div class="card-content-holder-small d-block d-md-none p-1 pb-0">
			<div class="text-center w-100">
				<h2 class="unbounded mb-1 lh-sm" style="font-size: .6em;">{label}</h2>
				{#if shortDesc != null}<p class="lead roboto pb-1 lh-sm" style="font-size: .6em;">{shortDesc}</p>{/if}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.card-content-holder,
	.card-content-holder-small {
		pointer-events: none;
	}
	
	.card-background {
		position: relative;
		height: 80vh;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		cursor: pointer;
		pointer-events: auto;
		color: var(--black);
	}

	.card-content-holder {
		background-color: var(--yellow);
		transition: all 0.5s;
		opacity: 0;
		height: 100%;
	}

	.card-content-holder-small {
		background-color: var(--yellow);
		max-width: 40%;
		width: max-content;
		height: auto;
	}

	.card-background:hover .card-content-holder {
		opacity: 0.9;
	}

	:global(.slick-slide) {
		transform: scaleY(0.95);
		transition: 0.5s;
	}

	:global(.slick-current) {
		transform: scaleY(1);
	}
</style>
