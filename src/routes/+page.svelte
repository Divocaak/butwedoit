<script>
	import HeaderWrapper from "$lib/HeaderWrapper.svelte";
</script>

<svelte:head>
	<title>BUTWEDOIT</title>
</svelte:head>

<HeaderWrapper hideMedia={true}>
    <div class="background">asd</div>
</HeaderWrapper>

<style>
    .background{
        background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
        background-image: url('/shapes/bg.png');
        position: relative;
        height: 100%;
        width: 100%;
    }
</style>