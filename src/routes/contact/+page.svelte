<script>
	import Navbar from '$lib/Navbar.svelte';
</script>

<svelte:head>
	<title>CONTACT</title>
</svelte:head>

<div class="header-wrapper">
	<div class="header-overlay">
		<Navbar />
		<div class="overlay-content d-flex align-items-center">
			<div class="text-center w-100">
				<h1 class="display-1">CONTACT US</h1>
				<div class="">
					<a class="btn-bigger" href="mailto:info@butwedoit.cz">info@butwedoit.cz</a><br />
					<a class="btn-bigger" href="tel:+420111222333">111&nbsp;222&nbsp;333</a>
				</div>
				<div class="pt-5">
					<p>VAT number (IČO): 14025132</p>
					<p class="lead">
						Jana Štursy 2408/37<br />
						370&nbsp;&nbsp;10
					</p>
				</div>
				<div class="pt-3 mb-5 pb-5">
					<h3>Follow us on</h3>
					<a
						class="display-6 mx-3"
						href="https://www.instagram.com/butwedoit/"
						target="_blank"
						rel="noreferrer"><i class="bi bi-instagram" /></a
					>
					<a
						class="display-6 mx-3"
						href="https://www.linkedin.com/company/but-we-do-it-production"
						target="_blank"
						rel="noreferrer"><i class="bi bi-linkedin" /></a
					>
				</div>
			</div>
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
</style>
