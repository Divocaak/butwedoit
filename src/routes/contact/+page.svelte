<script>
	import HeaderWrapper from '$lib/HeaderWrapper.svelte';
	import LinkButton from '$lib/LinkButton.svelte';
</script>

<svelte:head>
	<title>CONTACT</title>
</svelte:head>

<HeaderWrapper hideMedia={true} blackOnWhite={true}>
	<div class="m-md-5 p-5 montserrat">
		<div class="row">
			<div class="col-12 col-md-6">
				<h1>Petr Vančata</h1>
				<p>Lorem ipsum</p>
				<LinkButton href="tel:+420721343006" classes="me-5" blackOnWhite={true}>
					<i class="bi bi-telephone-fill pe-1" />+420&nbsp;721&nbsp;343&nbsp;006
				</LinkButton>
				<LinkButton href="mailto:petr@butwedoit.cz" blackOnWhite={true}>
					<i class="bi bi-envelope pe-1" />petr@butwedoit.cz
				</LinkButton>
			</div>
			<div class="col-12 col-md-6 pt-5 pt-md-0">
				<h1>Jindřich Soukal</h1>
				<p>Lorem ipsum</p>
				<LinkButton href="tel:+420608267367" classes="me-5" blackOnWhite={true}>
					<i class="bi bi-telephone-fill pe-1" />+420&nbsp;608&nbsp;267&nbsp;367
				</LinkButton>
				<LinkButton href="mailto:jindrich@butwedoit.cz" blackOnWhite={true}>
					<i class="bi bi-envelope pe-1" />jindrich@butwedoit.cz
				</LinkButton>
			</div>
		</div>
		<div class="spacer d-none d-md-block" />
		<div class="row pt-5 pt-md-0">
			<div class="col-12 col-md-3">
				<h3>Adresa sídla</h3>
			</div>
			<div class="col-12 col-md-3">
				<p>Jana Štursy 2408/37</p>
				<p>37010, České Budějovice</p>
			</div>
			<div class="col-12 col-md-3">
				<p>but we do it s.r.o.</p>
				<p>IČO 14025132</p>
			</div>
			<div class="col-3 d-none d-md-block" />
		</div>
		<!-- TODO webmaster link -->
		<p class="roboto fw-light text-end pt-5 mt-5">© butwedoit. All rights reserved.</p>
	</div>
</HeaderWrapper>

<style>
	.spacer {
		position: relative;
		height: 25vh;
	}
</style>
