<script>
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { MenuIcon } from './icons';

	let isScrolled = false;
	let isMobileMenuOpen = false;

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 20;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	$: headerBg = isScrolled ? 'bg-dark-400/80 shadow-lg' : 'bg-dark-400/40';
</script>

<header
	class="fixed left-0 top-0 z-50 w-full border-b border-white/10 backdrop-blur-md transition-all duration-300 {headerBg}"
>
	<div class="mx-auto max-w-7xl px-6">
		<div class="flex items-center justify-between py-4">
			<a href="/" class="relative flex items-center text-2xl font-bold">
				<span class="text-white">sritejach</span>
				<span class="text-primary">.dev</span>
				<span class="absolute -bottom-1 left-0 h-1 w-8 rounded bg-primary" />
			</a>
			<nav class="hidden md:block">
				<ul class="flex gap-8">
					<li>
						<a
							href="#about"
							class="relative font-medium text-dark-100 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-white hover:after:w-full"
							>About</a
						>
					</li>
					<li>
						<a
							href="#skills"
							class="relative font-medium text-dark-100 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-white hover:after:w-full"
							>Skills</a
						>
					</li>
					<li>
						<a
							href="#projects"
							class="relative font-medium text-dark-100 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-white hover:after:w-full"
							>Projects</a
						>
					</li>
					<li>
						<a
							href="#contact"
							class="relative font-medium text-dark-100 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-white hover:after:w-full"
							>Contact</a
						>
					</li>
				</ul>
			</nav>
			<button class="text-white md:hidden" on:click={toggleMobileMenu} aria-label="Toggle menu">
				<MenuIcon className="h-6 w-6" />
			</button>
		</div>
	</div>

	{#if isMobileMenuOpen}
		<div
			class="border-b border-white/10 bg-dark-300 md:hidden"
			transition:slide={{ duration: 200 }}
		>
			<div class="mx-auto max-w-7xl px-6 py-4">
				<ul class="flex flex-col gap-4">
					<li>
						<a
							href="#about"
							class="block py-2 font-medium text-dark-100 transition-colors hover:text-white"
							on:click={toggleMobileMenu}>About</a
						>
					</li>
					<li>
						<a
							href="#skills"
							class="block py-2 font-medium text-dark-100 transition-colors hover:text-white"
							on:click={toggleMobileMenu}>Skills</a
						>
					</li>
					<li>
						<a
							href="#projects"
							class="block py-2 font-medium text-dark-100 transition-colors hover:text-white"
							on:click={toggleMobileMenu}>Projects</a
						>
					</li>
					<li>
						<a
							href="#contact"
							class="block py-2 font-medium text-dark-100 transition-colors hover:text-white"
							on:click={toggleMobileMenu}>Contact</a
						>
					</li>
				</ul>
			</div>
		</div>
	{/if}
</header>
