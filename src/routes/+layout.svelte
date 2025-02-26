<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BackToTop from '$lib/components/BackToTop.svelte';
	import { onMount, onDestroy } from 'svelte';

	// Initialize dark mode
	onMount(() => {
		// Make sure document exists (for SSR compatibility)
		if (typeof document !== 'undefined') {
			document.documentElement.classList.add('dark');
		}

		// Smooth scroll for anchor links
		const handleAnchorClick = (e) => {
			const link = e.target.closest('a');
			if (!link) return;

			const href = link.getAttribute('href');
			if (href && href.startsWith('#')) {
				e.preventDefault();
				const targetId = href.substring(1);
				const targetElement = document.getElementById(targetId);

				if (targetElement) {
					targetElement.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					});

					// Update URL without reload
					history.pushState(null, null, href);
				}
			}
		};

		document.addEventListener('click', handleAnchorClick);

		return () => {
			document.removeEventListener('click', handleAnchorClick);
		};
	});
</script>

<svelte:head>
	<title>Ramcharan Sriteja Chilakapati | Senior Fullstack Engineer</title>
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Footer />
<BackToTop />
