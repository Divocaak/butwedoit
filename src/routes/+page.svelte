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
				<div class="asd" style="background-image:url(/shapes/btn_a.png)"></div>
				<div class="unbounded pt-5">
					<h1 class="display-1 text-center">EVENT</h1>
					<h1 class="display-1 text-end me-5">&mdash;TY</h1>
					<div class="note-holder roboto d-none d-md-block" style="right: 0em;">
						<p>
							Jsme specialisté na hybridní<br />
							eventy popřípadě přesuneme<br />
							Vaši akci kompletně do onlinu.
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
				<div class="asd" style="background-image:url(/shapes/btn_b.png)"></div>
				<div class="unbounded pt-5">
					<h1 class="display-1 pt-5 pt-md-0 ps-5">VI&mdash;</h1>
					<h1 class="display-1" style="position:relative; left:20%;">DEA</h1>
					<div class="note-holder roboto d-none d-md-block" style="left: 2em;">
						<p>
							Tvorba videa na míru, natáčíme<br />
							produktová, průmyslová videa<br />
							a taky propagační videa.
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

	.btn-wrapper img{
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
