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
			window.location.href = '/detail/videos/' + id;
		}
	}

	const onClosePopup = () => {
		showPopup = false;
		label = null;
		desc = null;
		ytKey = null;
	};

	import jQuery from 'jquery';
	import 'slick-carousel';
	import { onMount } from 'svelte';

	onMount(() => {
		jQuery('#reelCarousel').slick({
			arrows: false,
			centerMode: true,
			centerPadding: '5vh',
			slidesToShow: 3,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '1vh',
						slidesToShow: 1
					}
				}
			]
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
		Check out <LinkButton href="#reelCarousel">Reels</LinkButton> too
	</p>
</HeaderWrapper>
<ContentWrapper>
	<div class="row">
		{#each videos as video, i}
			<Card
				label={video.label}
				shortDesc={video.shortDesc}
				detailGalPath={video.detailGalleryPath}
				detailDesc={video.detailLongDesc}
				thumbnail={video.thumbnail}
				textColor={video.textColor}
				bgColor={video.backgroundColor}
				yt={video.youtube}
				last={!(++i === videos.length && i % 2 != 0) ? 'col-md-6 ' : ''}
				onClick={() => onShowPopup(video.label, video.shortDesc, video.youtube, i - 1)}
			/>
		{/each}
	</div>
</ContentWrapper>
<ContentWrapper>
	<div id="reelCarousel">
		{#each reels as reel}
			<ReelCard
				yt={reel.youtube}
				thumbnail={reel.thumbnail}
				label={reel.label}
				shortDesc={reel.shortDesc}
				bgColor={reel.backgroundColor}
				textColor={reel.textColor}
				onClick={() => onShowPopup(reel.label, reel.shortDesc, reel.youtube)}
			/>
		{/each}
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
