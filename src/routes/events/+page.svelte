<script>
	import Background from '$lib/Background.svelte';
	import EventCategory from '$lib/EventCategory.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import Event from '$lib/Event.svelte';

	import events from '$lib/content/events.json';
</script>

<svelte:head>
    <title>EVENTS</title>
</svelte:head>

<Background title="events" />
<ContentWrapper>
	{#each events as category}
		<EventCategory label={category.label} desc={category.desc} />
		{#each category.projects as event, i}
			<Event odd={i % 2 > 0}
				thumbnail={event.thumbnail}
				label={event.label}
				shortDesc={event.shortDesc}
				bgColor={event.bgColor}
				textColor={event.textColor}
				/>
		{/each}
	{/each}
</ContentWrapper>
