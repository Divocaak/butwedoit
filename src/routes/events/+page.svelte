<script>
	import Background from '$lib/Background.svelte';
	import EventCategory from '$lib/EventCategory.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import Event from '$lib/Event.svelte';
	import Footer from '$lib/Footer.svelte';

	import events from '$lib/content/events.json';
</script>

<svelte:head>
	<title>EVENTS</title>
</svelte:head>

<Background title="events">
	<p class="lead unbounded">
		Lorem ipsum
	</p>
</Background>
<ContentWrapper blackOnWhite={true}>
	{#each events as category, ci}
		<EventCategory label={category.label} descMain={category.descMain} desc={category.desc} />
		{#each category.projects as event, i}
			<Event
				odd={i % 2 > 0}
				thumbnail={event.thumbnail}
				label={event.label}
				desc={event.shortDesc}
				eventType={ci}
				id={i}
			/>
		{/each}
	{/each}
	<Footer />
</ContentWrapper>
