<script>
	import LinkButton from '$lib/LinkButton.svelte';
	import Credit from '$lib/Credit.svelte';
</script>

<div class="footer-wrapper mx-5 p-5 mt-5 black-on-white">
	<div class="row">
		<div class="col-12 col-md-4 montserrat">
			<p><b>Contact us!</b></p>
			<LinkButton href="mailto:hello@butwedoit.cz" blackOnWhite={true}
				><b>hello@butwedoit.cz</b></LinkButton
			><br />
			<LinkButton href="tel:+420420721343006" blackOnWhite={true}
				><b>+420&nbsp;721&nbsp;343&nbsp;006</b></LinkButton
			>
			<p class="py-5">
				COMPANY ADDRESS<br />
				Jana Štursy 2408/37<br />
				37010, České Budějovice<br />
				Czech Republic
			</p>
			<p>IN/IČO: 14025132</p>
			<p>VAT/DIČ: CZ14025132</p>
		</div>
		<div class="col-12 col-md-8">
			<div class="row align-items-center">
				<div class="col"><img class="img-fluid" src="/logos/adidas.png" alt="logo" /></div>
				<div class="col">
					<img class="img-fluid" src="/logos/samsung.png" alt="logo" />
				</div>
				<div class="col"><img class="img-fluid inverted" src="/logos/hbo.png" alt="logo" /></div>
				<div class="col"><img class="img-fluid inverted" src="/logos/loreal.png" alt="logo" /></div>
				<div class="col"><img class="img-fluid" src="/logos/footshop.png" alt="logo" /></div>
			</div>
			<div class="row align-items-center">
				<div class="col">
					<img class="img-fluid" src="/logos/redbull.png" alt="logo" />
				</div>
				<div class="col"><img class="img-fluid inverted" src="/logos/wolt.png" alt="logo" /></div>
				<div class="col">
					<img class="img-fluid inverted" src="/logos/airbank.png" alt="logo" />
				</div>
				<div class="col">
					<img class="img-fluid inverted" src="/logos/czechcrunch.png" alt="logo" />
				</div>
				<div class="col"><img class="img-fluid" src="/logos/elle.png" alt="logo" /></div>
			</div>
			<p class="roboto text-end pt-5 mt-md-5">© butwedoit, All rights reserved.</p>
			<Credit />
		</div>
	</div>
</div>

<style>
	.footer-wrapper {
		position: relative;
		min-height: 50vh;
		background-color: var(--yellow);
		color: var(--black);
	}

	.inverted {
		filter: invert();
	}
</style>
