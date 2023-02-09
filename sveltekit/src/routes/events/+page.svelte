<script>
	import Background from '$lib/Background.svelte';
	import EventCategory from '$lib/EventCategory.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import Event from '$lib/Event.svelte';

	import events from '$lib/content/events.json';
</script>

<Background title="events" />
<ContentWrapper>
	{#each events as category}
		<EventCategory label={category.label} desc={category.desc} />
		{#each category.projects as event}
		<Event></Event>
		{/each}
	{/each}
</ContentWrapper>
