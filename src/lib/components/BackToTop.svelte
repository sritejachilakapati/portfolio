<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { ChevronUpIcon } from './icons';

	let visible = false;

	onMount(() => {
		const handleScroll = () => {
			visible = window.scrollY > 300;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

{#if visible}
	<button
		on:click={scrollToTop}
		class="fixed bottom-8 right-8 flex h-12 w-12 transform items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform duration-300 hover:scale-110"
		transition:fade
		aria-label="Back to top"
	>
		<ChevronUpIcon className="h-6 w-6" />
	</button>
{/if}
