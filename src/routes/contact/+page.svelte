<script>
	import Navbar from '$lib/Navbar.svelte';
</script>

<svelte:head>
	<title>CONTACT</title>
</svelte:head>

<!-- TODO use background.svelte -->
<div class="header-wrapper">
	<div class="header-overlay background">
		<Navbar />
		<div class="overlay-content m-5 p-5 montserrat">
			<div class="row">
				<div class="col-6">
					<h1>Petr Vančata</h1>
					<p>Lorem ipsum</p>
					<!-- TODO hrefs -->
					<a href="tel:+420111222333" class="me-5">
						<i class="bi bi-telephone-fill pe-2" />+420&nbsp;XXX&nbsp;XXX&nbsp;XXX
					</a>
					<a href="mailto:petr@butwedoit.cz">
						<i class="bi bi-envelope pe-2" />petr@butwedoit.cz
					</a>
				</div>
				<div class="col-6">
					<h1>Jindřich Soukal</h1>
					<p>Lorem ipsum</p>
					<!-- TODO hrefs -->
					<a href="tel:+420111222333" class="me-5">
						<i class="bi bi-telephone-fill pe-2" />+420&nbsp;XXX&nbsp;XXX&nbsp;XXX
					</a>
					<a href="mailto:jindrich@butwedoit.cz">
						<i class="bi bi-envelope pe-2" />jindrich@butwedoit.cz
					</a>
				</div>
			</div>
			<div class="spacer"></div>
			<div class="row">
				<div class="col-3">
					<h3>Adresa sídla</h3>
				</div>
				<div class="col-3">
					<p>Jana Štursy 2408/37</p>
					<p>37010, České Budějovice</p>
				</div>
				<div class="col-3">
					<p>but we do it s.r.o.</p>
					<p>IČO 14025132</p>
				</div>
				<div class="col-3" />
			</div>
			<p class="roboto fw-light text-end pt-5 mt-5">© butwedoit. All rights reserved.</p>
		</div>
	</div>
</div>

<!-- TODO DRY -->
<style>
	
	.header-wrapper {
		position: fixed;
		top: 0;
		height: 100vh;
		height: 100vw;
	}
	
	.header-wrapper .header-overlay {
		position: fixed;
		z-index: 2;
		top: 0;
		width: 100%;
		height: 100%;
		color: var(--white);
		background-color: rgba(0, 0, 0, 0.5);
	}

	/* TODO hover effects, logo */
	.background{
		background-color: var(--yellow) !important;
		color: var(--black) !important;
	}
	
	.spacer{
		position: relative;
		height: 25vh;
	}
</style>
