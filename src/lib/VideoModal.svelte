<script>
	/* https://eternaldev.com/blog/using-bootstrap-modal-in-svelte/ */
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let open = false;
	export let showBackdrop = true;

	export let onClosed;

	export let label,
		desc,
		src = null;

	const modalClose = () => {
		open = false;
		src = null;
		if (onClosed) {
			onClosed();
		}
	};
</script>

{#if open}
	<div
		class="modal"
		id="videoPlayer"
		tabindex="-1"
		aria-labelledby="videoPlayerLabel"
		aria-hidden={false}
		on:click={modalClose}
	>
		<div
			class="modal-dialog modal-dialog-centered modal-lg"
			in:fly={{ y: -50, duration: 300 }}
			out:fly={{ y: -50, duration: 300, easing: quintOut }}
		>
			<div class="modal-content modal-video-wrapper text-center">
				<div class="modal-header">
					<h5 class="modal-title display-5 unbounded text-start">{label}</h5>
					<button class="btn text-light btn-bigger" on:click={modalClose}>
						<i class="bi bi-x-circle ps-2" />
					</button>
				</div>
				<div class="ratio ratio-16x9">
					{#if src != null}
						<iframe id="playerIframe" {src} allowfullscreen allow="autoplay" title="video player" />
					{/if}
				</div>
				{#if desc != null}
					<p class="lead pt-3 roboto">{desc}</p>
				{/if}
			</div>
		</div>
	</div>
	{#if showBackdrop}<div class="modal-backdrop show" transition:fade={{ duration: 150 }} />{/if}
{/if}

<style>
	.modal {
		display: block;
	}

	.modal-video-wrapper {
		background-color: transparent;
		border: none;
		color: var(--white);
	}

	.modal-backdrop {
		opacity: 0.7 !important;
	}

	.btn-bigger {
		font-size: 2rem;
	}
</style>
