<script>
	import LinkButton from '$lib/LinkButton.svelte';
</script>

<div class="footer-wrapper mx-5 p-5 mt-5 black-on-white">
	<div class="row">
		<div class="col-12 col-md-4 montserrat">
			<p><b>Contact us!</b></p>
			<LinkButton href="mailto:hello@butwedoit.cz" blackOnWhite={true}><b>hello@butwedoit.cz</b></LinkButton><br />
			<LinkButton href="tel:+420682637637" blackOnWhite={true}><b>+420&nbsp;682&nbsp;637&nbsp;637</b></LinkButton>
			<p class="py-5">
				Jana Štursy 2408/37<br />
				37010, České Budějovice<br />
				Czech Republic
			</p>
			<p>VAT/IČO: 14025132</p>
		</div>
		<div class="col-12 col-md-8">
			<div class="row">
				<div class="col"><img class="img-fluid" src="/logos/adidas.png" alt="logo" /></div>
				<div class="col"><img class="img-fluid" src="/logos/placeholder.png" alt="logo" /></div>
				<div class="col"><img class="img-fluid" src="/logos/placeholder.png" alt="logo" /></div>
				<div class="col"><img class="img-fluid" src="/logos/placeholder.png" alt="logo" /></div>
				<div class="col"><img class="img-fluid" src="/logos/placeholder.png" alt="logo" /></div>
			</div>
			<div class="row">
				<div class="col"><img class="img-fluid" src="/logos/placeholder.png" alt="logo" /></div>
				<div class="col"><img class="img-fluid" src="/logos/placeholder.png" alt="logo" /></div>
				<div class="col"><img class="img-fluid" src="/logos/placeholder.png" alt="logo" /></div>
				<div class="col"><img class="img-fluid" src="/logos/placeholder.png" alt="logo" /></div>
				<div class="col"><img class="img-fluid" src="/logos/placeholder.png" alt="logo" /></div>
			</div>
			<p class="roboto text-end pt-5 mt-md-5">© butwedoit, All rights reserved.</p>
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
</style>
