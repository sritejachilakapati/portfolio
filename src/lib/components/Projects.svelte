<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import ProjectCard from './ProjectCard.svelte';

	let inView = false;

	// Project data
	const projects = [
		{
			title: 'MovieTix',
			description:
				'An online movie ticket booking platform with a Golang backend and a Next.js frontend. Supports real-time seat selection, OAuth 2.0 authentication, and PostgreSQL for transaction management.',
			image: '/images/projects/empty-theater.jpg',
			githubUrl: 'https://github.com/sritejachilakapati/movietix',
			demoUrl: null, // Hasn't been deployed yet
			tags: ['Next.js', 'Golang', 'PostgreSQL', 'OAuth 2.0'],
			badge: 'In-Progress'
		},
		{
			title: 'Common Election Portal - Backend',
			description:
				'Developed a robust election management backend enabling user registration, candidate nominations, and secure voting. Built with MongoDB, utilizing complex aggregation pipelines for analytics and authentication secured via Passport and JWT.',
			image: '/images/projects/cep-ballot.jpg',
			githubUrl: 'https://github.com/sritejachilakapati/Common-Election-Portal-Server',
			demoUrl: null, // No demo for backend
			tags: ['MongoDB', 'Passport', 'JWT'],
			badge: 'Backend Only'
		},
		{
			title: 'Policy Visualizer',
			description:
				'A data visualization tool for analyzing and interpreting complex insurance policies. Built using React.js for an interactive UI and a Node.js backend with AWS RDS for structured data storage.',
			image: '/images/projects/policy-visualizer.jpg',
			githubUrl: 'https://github.com/sritejachilakapati/policy-visualizer',
			demoUrl: null, // Old projects, deployment not available anymore
			tags: ['React.js', 'Chart.js', 'Express', 'AWS RDS']
		},
		{
			title: 'Habit Tracker',
			description:
				'A productivity-focused habit tracking application that helps users build and maintain daily routines. Features progress tracking, reminders, and insights using MongoDB and Express.',
			image: '/images/projects/habit-tracker.jpg',
			githubUrl: 'https://github.com/sritejachilakapati/habit-tracker',
			demoUrl: null, // Old projects, deployment not available anymore
			tags: ['React.js', 'MongoDB', 'Express']
		}
	];

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						inView = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		const section = document.getElementById('projects');
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	});
</script>

<section id="projects" class="relative py-24">
	<div class="container mx-auto max-w-7xl px-6">
		<h2 class="mb-16 text-center text-3xl font-bold md:text-4xl">
			<span class="relative inline-block">
				Featured Projects
				<span class="absolute -bottom-2 left-1/4 right-1/4 h-1 rounded bg-primary"></span>
			</span>
		</h2>

		<!-- Vertical timeline line -->
		<div
			class="absolute bottom-32 left-1/2 top-[18rem] z-10 hidden w-px -translate-x-1/2 transform bg-primary bg-opacity-30 md:block"
		></div>

		{#if inView}
			<div class="relative space-y-32">
				<!-- Disclaimer -->
				<div class="mb-12 text-center text-sm italic text-dark-100">
					* Some project images are visualizations of concepts. These are either in-progress or
					backend-only projects
				</div>
				{#each projects as project, i (project.title)}
					<div class="relative" in:fly={{ y: 50, duration: 800, delay: i * 200 }}>
						<!-- Project card -->
						<ProjectCard {project} index={i} />
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
