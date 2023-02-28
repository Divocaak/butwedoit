<script>
	import HeaderWrapper from '$lib/HeaderWrapper.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import Card from '$lib/VideoCard.svelte';
	import ReelCard from '$lib/ReelCard.svelte';
	import VideoModal from '$lib/VideoModal.svelte';
	import Footer from '$lib/Footer.svelte';
	import LinkButton from '$lib/LinkButton.svelte';

	import videos from '$lib/content/videos.json';
	import reels from '$lib/content/reels.json';

	import jQuery from 'jquery';
	import 'slick-carousel';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let showPopup = false;
	let label = null;
	let desc = null;
	let ytKey = null;

	function onShowPopup(newLabel, newDesc, newYtKey = null, id) {
		if (newYtKey != null) {
			showPopup = true;
			label = newLabel;
			desc = newDesc;
			ytKey = newYtKey;
		} else {
			goto('/detail/videos/' + id);
		}
	}

	const onClosePopup = () => {
		showPopup = false;
		label = null;
		desc = null;
		ytKey = null;
	};

	onMount(() => {
		jQuery('#reelCarousel').slick({
			dots: true,
			arrows: false,
			centerMode: true,
			centerPadding: '5vh',
			slidesToShow: 3,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						centerPadding: '1vh',
						slidesToShow: 1
					}
				}
			]
		});

		jQuery('.prev-btn').on('click', function () {
			jQuery('#reelCarousel').slick('slickPrev');
		});

		jQuery('.next-btn').on('click', function () {
			jQuery('#reelCarousel').slick('slickNext');
		});
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		type="text/css"
		href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
	/>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<title>VIDEOS</title>
</svelte:head>

<HeaderWrapper title="videos">
	<p class="lead unbounded">
		Check out <LinkButton href="#reels">Reels</LinkButton> too
	</p>
</HeaderWrapper>
<ContentWrapper>
	<div class="row">
		{#each videos as video, i}
			<Card
				last={!(++i === videos.length && i % 2 != 0) ? 'col-md-6 ' : ''}
				label={video.label}
				shortDesc={video.shortDesc}
				thumbnail={video.thumbnail}
				onClick={() => onShowPopup(video.label, video.shortDesc, video.youtube, i - 1)}
			/>
		{/each}
	</div>
</ContentWrapper>
<ContentWrapper>
	<div id="reels" class="text-center py-5">
		<h1 class="unbounded display-1">REELS</h1>
		<p class="lead unbounded">9:16 / IG REELS / YOUTUBE SHORTS</p>
	</div>
	<div>
		<div id="reelCarousel">
			{#each reels as reel}
			<ReelCard
			thumbnail={reel.thumbnail}
			label={reel.label}
			shortDesc={reel.shortDesc}
			onClick={() => onShowPopup(reel.label, reel.shortDesc, reel.youtube)}
			/>
			{/each}
		</div>
		<div class="reel-btn-wrapper d-flex d-md-none">
			<button class="btn text-light prev-btn"><i class="bi bi-caret-left-fill"></i></button>
			<div class="container-fluid" />
			<button class="btn text-light next-btn"><i class="bi bi-caret-right-fill"></i></button>
		</div>
	</div>
	<Footer />
</ContentWrapper>

<VideoModal
	open={showPopup}
	onClosed={() => onClosePopup()}
	{label}
	{desc}
	src="https://www.youtube.com/embed/{ytKey}?autoplay=1&mute=1&showinfo=0&controls=1&html5=1"
/>

<style type="scss">
	:global(.slick-dots) {
		position: absolute;
		top: -30px;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
	}

	:global(.slick-dots button) {
		display: block;
		width: 5em;
		height: 0.5em;
		border: none;
		background-color: #171717;
		transition: 0.4s;
	}

	:global(li.slick-active button) {
		background-color: var(--yellow);
	}

	.reel-btn-wrapper {
		pointer-events: none;
		position: relative;
		bottom: 30vh;
	}
	
	.reel-btn-wrapper button{
		pointer-events: initial;
		font-size: 2rem;
		color: var(--yellow) !important;
	}
</style>
