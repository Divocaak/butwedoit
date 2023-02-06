<script>
	import Background from '$lib/Background.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import Card from '$lib/Card.svelte';
	import ReelCard from '$lib/ReelCard.svelte';

	import videos from '$lib/content/videos.json';
	import reels from '$lib/content/reels.json';

	import jQuery from 'jquery';
	import "slick-carousel";
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

		var openPlayer = function (element) {
			var yt = jQuery(element).data('youtubeId');
			var label = jQuery(element).data('label');
			var desc = jQuery(element).data('desc');
			if (yt != null) {
				if (yt != '') {
					jQuery('#modalLabel').text(label);
					jQuery('#modalDesc').text(desc);
					jQuery('#playerIframe').attr(
						'src',
						'https://www.youtube.com/embed/' +
							yt +
							'?autoplay=1&mute=1&showinfo=0&controls=1&html5=1'
					);

					jQuery('#videoPlayer').modal('show');
				} else {
					jQuery.redirectPost('detail.php', {
						thumbnail: jQuery(element).data('thumbnail'),
						label: label,
						desc: desc,
						longDesc: jQuery(element).data('longDesc'),
						galPath: jQuery(element).data('galPath')
					});
				}
			}
		};

		jQuery('.videoCard').click(function () {
			openPlayer(jQuery(this));
		});

		jQuery('.card-background')
			.on('mousedown', function (e) {
				jQuery(this).data('p0', {
					x: e.pageX,
					y: e.pageY
				});
			})
			.on('mouseup', function (e) {
				var p0 = jQuery(this).data('p0'),
					p1 = {
						x: e.pageX,
						y: e.pageY
					},
					d = Math.sqrt(Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2));

				if (d < 4) {
					openPlayer(jQuery(this));
				}
			});

		jQuery('#videoPlayer').on('hide.bs.modal', function (e) {
			jQuery('#playerIframe').attr('src', '');
		});
	});
</script>

<svelte:head>
	<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</svelte:head>

<Background title="videos" />
<ContentWrapper>
	<div class="row">
		{#each videos as video, i}
			<Card
				label={video.label}
				shortDesc={video.shortDesc}
				detailGalPath={video.detailGalPath}
				detailDesc={video.detailDesc}
				thumbnail={video.thumbnail}
				textColor={video.textColor}
				bgColor={video.backgroundColor}
				yt={video.yt}
				last={!(++i === videos.length && i % 2 != 0) ? 'col-md-6 ' : ''}
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
			/>
		{/each}
	</div>
</ContentWrapper>
