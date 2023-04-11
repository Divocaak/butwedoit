<script>
	import HeaderWrapper from '$lib/HeaderWrapper.svelte';
	import { goto } from '$app/navigation';

	function onButton(route) {
		goto(route);
	}
</script>

<svelte:head>
	<title>BUTWEDOIT</title>
</svelte:head>

<HeaderWrapper imagePath="/shapes/bg.png" indexBackground={true}>
	<div class="container">
		<div class="row gx-md-5">
			<div
				class="col-12 col-md-6 btn-wrapper"
				on:click={() => onButton('/events')}
				on:keypress={() => onButton('/events')}
			>
				<img src="/shapes/btn_a.png" alt="background" class="img-fluid" />
				<div class="asd" style="background-image:url(/shapes/btn_a.png)" />
				<div class="unbounded pt-5">
					<h1 class="display-2 text-center">EVEN&mdash;</h1>
					<h1 class="display-2 text-end me-5">&mdash;TS</h1>
					<div class="note-holder roboto d-none d-md-block" style="right: 1em; font-size: .9rem">
						<p>
							Impress your audience with innovative and professionally organized events.<br/>
							Connect online and offline &mdash;
						</p>
					</div>
				</div>
			</div>
			<div
				class="col-12 col-md-6 btn-wrapper pt-5 pt-md-0"
				on:click={() => onButton('/videos')}
				on:keypress={() => onButton('/videos')}
			>
				<img src="/shapes/btn_b.png" alt="background" class="img-fluid" />
				<div class="asd" style="background-image:url(/shapes/btn_b.png)" />
				<div class="unbounded pt-5">
					<h1 class="display-2 pt-5 pt-md-0 ps-5">VI&mdash;</h1>
					<h1 class="display-2" style="position:relative; left:20%;">&mdash;DEOS</h1>
					<div class="note-holder roboto d-none d-md-block" style="left: 2em; font-size: .9rem">
						<p>
							Engage your viewers with compelling storytelling and inspire them with visually captivating & attention grabbing videos &mdash;
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- TODO webmaster link -->
	<p class="roboto fw-light rights-text">© butwedoit. All rights reserved.</p>
</HeaderWrapper>

<style>
	.btn-wrapper {
		position: relative;
		overflow: hidden;
		text-align: left;
	}

	.btn-wrapper img {
		opacity: 0;
	}

	.btn-wrapper .asd {
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		transition: 0.5s;
	}

	.btn-wrapper:hover .asd {
		filter: blur(5px) brightness(0.5);
		transform: scale(1.1);
	}

	.btn-wrapper > div {
		cursor: pointer;
		position: absolute;
		bottom: 0;
		width: 93.8%;
		height: 100%;
	}

	.note-holder {
		position: absolute;
		width: 40%;
		bottom: 1em;
	}

	.rights-text {
		font-size: 0.7em;
		position: absolute;
		bottom: 1rem;
		left: 1rem;
	}
</style>
