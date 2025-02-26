<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { ArrowRightIcon } from './icons';

	let loaded = false;
	let startMarquee = false;

	onMount(() => {
		loaded = true;
		const t = setTimeout(() => {
			startMarquee = true;
		}, 1000);

		return () => clearTimeout(t);
	});

	const techStack = [
		{ id: 'react', img: '/images/techstack/react-icon.svg' },
		{ id: 'nextjs', img: '/images/techstack/nextjs-icon.svg' },
		{ id: 'javascript', img: '/images/techstack/javascript-icon.svg' },
		{ id: 'typescript', img: '/images/techstack/typescript-icon.svg' },
		{ id: 'tailwind', img: '/images/techstack/tailwind-icon.svg' },
		{ id: 'nodejs', img: '/images/techstack/nodejs-icon.svg' },
		{ id: 'express', img: '/images/techstack/express-icon.svg' },
		{ id: 'postgresql', img: '/images/techstack/postgresql-icon.svg' },
		{ id: 'mongo', img: '/images/techstack/mongo-icon.svg' },
		{ id: 'graphql', img: '/images/techstack/graphql-icon.svg' },
		{ id: 'docker', img: '/images/techstack/docker-icon.svg' },
		{ id: 'aws', img: '/images/techstack/aws-icon.svg' },
		{ id: 'gcp', img: '/images/techstack/gcp-icon.svg' },
		{ id: 'golang', img: '/images/techstack/golang-icon.svg' }
	];
</script>

<section id="hero" class="relative flex min-h-screen items-center overflow-hidden pt-16">
	<!-- Animated particles -->
	<div id="particles-container" class="absolute inset-0 z-0"></div>

	<div class="container z-10 mx-auto max-w-7xl px-6">
		{#if loaded}
			<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
				<div in:fly={{ y: 50, duration: 1000 }}>
					<div class="mb-4">
						<span
							class="mb-4 inline-block rounded-full bg-primary bg-opacity-10 px-3 py-1 text-sm font-medium text-primary"
							>Senior Fullstack Engineer</span
						>
						<h1 class="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
							<span class="block">Hi, I'm</span>
							<span class="block text-primary">Ramcharan Sriteja</span>
							<span class="block">Chilakapati</span>
						</h1>
						<p class="mb-8 text-xl text-dark-100">
							Frontend-focused fullstack developer crafting beautiful, performant, and accessible
							web experiences.
						</p>
					</div>
					<div class="flex flex-wrap gap-4">
						<a
							href="#projects"
							class="button-gradient inline-flex items-center rounded-lg px-8 py-3 font-medium transition-opacity hover:opacity-90"
						>
							View My Work
							<ArrowRightIcon className="h-5 w-5 ml-2" />
						</a>
						<a
							href="#contact"
							class="rounded-lg border border-primary px-8 py-3 font-medium transition-colors hover:bg-primary hover:bg-opacity-10"
							>Contact Me</a
						>
					</div>
				</div>
				<div class="relative hidden lg:block" in:fly={{ x: 50, duration: 1000, delay: 300 }}>
					<div class="relative h-96 w-full animate-[float_6s_ease-in-out_infinite]">
						<div
							class="absolute left-0 top-0 h-full w-full rounded-full bg-primary opacity-20 blur-3xl filter"
						></div>
						<img
							src="/images/hero-illustration.jpg"
							alt="Developer Illustration"
							class="relative z-10 mx-auto"
						/>
					</div>
				</div>
			</div>

			<!-- Tech stack slider -->
			<div class="mt-24 overflow-hidden" in:fade={{ duration: 1000, delay: 600 }}>
				<h3 class="mb-8 text-center text-lg text-dark-100">Tech Stack</h3>
				<div class="relative w-full overflow-hidden whitespace-nowrap">
					<div class="flex w-max items-center gap-8 pl-8" class:animate-marquee={startMarquee}>
						{#each techStack.concat(techStack) as tech, i (tech.id + i)}
							<div
								class="flex h-24 w-24 flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded-xl bg-white/80 backdrop-blur-sm"
							>
								<img class="drop-shadow" src={tech.img} alt={tech.id} width="48px" height="48px" />
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>

	<!-- Scroll down indicator -->
	<div
		class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 transform flex-col items-center xl:flex"
	>
		<span class="mb-2 text-sm text-dark-100">Scroll Down</span>
		<div class="flex h-10 w-6 justify-center rounded-full border-2 border-dark-100">
			<div class="mt-2 h-2 w-2 animate-bounce rounded-full bg-primary"></div>
		</div>
	</div>
</section>
