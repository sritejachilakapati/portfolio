<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let showExperience = true;
	let inView = false;

	// Experience data
	const experiences = [
		{
			title: 'Senior Fullstack Engineer',
			company: 'Animall Technologies',
			period: '2022 - Present',
			description:
				'Leading end-to-end development and deployment of scalable web applications using Next.js, Nest.js, and AWS.'
		},
		{
			title: 'Software Engineer',
			company: 'Mphasis Limited',
			period: '2021-2022',
			description:
				'Led the migration of a legacy premium calculation service from C# .Net to Node.js, significantly improving system scalability and maintainability.'
		},
		{
			title: 'Associate Software Engineer',
			company: 'Mphasis Limited',
			period: '2020 - 2021',
			description:
				'Spearheaded the development of a global travel insurance platform, partnering with over 100 airlines across EMEA and APAC to streamline insurance purchase processes.'
		},
		{
			title: 'Trainee Associate Software Engineer',
			company: 'Mphasis Limited',
			period: '2019 - 2020',
			description:
				'Coordinated effectively across global teams and time zones, ensuring seamless collaboration with QA, Business, and Development units, contributing to a 20% reduction in project delivery times.'
		}
	];

	// Education data
	const education = [
		{
			degree: 'Server-side Development with NodeJS, Express, and MongoDB',
			institution: 'Coursera (Hong Kong University of Science and Technology)',
			period: '2021',
			description:
				'Focused on backend development, RESTful API design, authentication, and database integration using MongoDB. Implemented best practices for server-side programming and performance optimization.'
		},
		{
			degree: 'Full-Stack Web Development with React Specialization',
			institution: 'Coursera (Hong Kong University of Science and Technology)',
			period: '2021',
			description:
				'Completed a specialization covering front-end development with React, back-end development with Node.js and Express, and database management with MongoDB. Gained hands-on experience in building and deploying full-stack applications.'
		},
		{
			degree: 'Bachelor of Technology',
			institution: 'Sri Vasavi Engineering College (JNTU Kakinada)',
			period: '2015 - 2019',
			description:
				'Graduated with a CGPA of 7.6, gaining a strong foundation in electronic systems, communication networks, and programming. Developed problem-solving skills and worked on multiple projects involving embedded systems and software development.'
		}
	];

	function toggleExperience() {
		showExperience = true;
	}

	function toggleEducation() {
		showExperience = false;
	}

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

		const section = document.getElementById('about');
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	});
</script>

<section id="about" class="relative py-24">
	<div class="container mx-auto max-w-7xl px-6">
		{#if inView}
			<div class="flex flex-col items-center gap-16 md:flex-row">
				<div class="md:w-1/2" in:fly={{ y: 50, duration: 800 }}>
					<h2 class="relative mb-8 inline-block text-3xl font-bold md:text-4xl">
						About Me
						<span class="absolute -bottom-2 left-0 h-1 w-1/2 rounded bg-primary"></span>
					</h2>
					<p class="mb-6 text-dark-100">
						I'm a Senior Fullstack Engineer with a focus on frontend technologies. With 6 years of
						expertise in React, TypeScript, and Next.js, I build beautiful, performant, and
						accessible web applications that deliver exceptional user experiences.
					</p>

					<p class="mb-6 text-dark-100">
						As a developer who values clean, maintainable code, I'm passionate about creating
						intuitive interfaces and optimizing for performance. My fullstack experience allows me
						to seamlessly integrate frontend and backend systems.
					</p>

					<p class="mb-8 text-dark-100">
						When I'm not coding, you can find me exploring new technologies, contributing to
						open-source projects, or sharing knowledge through technical articles and mentoring.
					</p>

					<div class="flex gap-4">
						<button
							on:click={toggleExperience}
							class="rounded px-5 py-2 font-medium {showExperience
								? 'bg-primary hover:bg-primary/90'
								: 'border border-primary hover:bg-primary/10'} transition-colors"
						>
							Experience
						</button>
						<button
							on:click={toggleEducation}
							class="rounded px-5 py-2 font-medium {!showExperience
								? 'bg-primary hover:bg-primary/90'
								: 'border border-primary hover:bg-primary/10'} transition-colors"
						>
							Education
						</button>
					</div>
				</div>
				<div class="md:w-1/2" in:fly={{ y: 50, duration: 800, delay: 200 }}>
					{#if showExperience}
						<div
							class="card-gradient relative rounded-2xl border border-white border-opacity-5 p-8"
							in:fade={{ duration: 300 }}
						>
							<div
								class="absolute -right-3 -top-3 rounded-full bg-primary px-3 py-1 text-sm font-medium"
							>
								Experience
							</div>
							<div class="space-y-6">
								{#each experiences as experience}
									<div>
										<div class="mb-2 flex items-start justify-between">
											<div>
												<h3 class="text-xl font-bold">{experience.title}</h3>
												<p class="text-primary">{experience.company}</p>
											</div>
											<span class="text-sm text-dark-100">{experience.period}</span>
										</div>
										<p class="text-dark-100">{experience.description}</p>
									</div>
								{/each}
							</div>
						</div>
					{:else}
						<div
							class="card-gradient relative rounded-2xl border border-white border-opacity-5 p-8"
							in:fade={{ duration: 300 }}
						>
							<div
								class="absolute -right-3 -top-3 rounded-full bg-primary px-3 py-1 text-sm font-medium"
							>
								Education
							</div>
							<div class="space-y-6">
								{#each education as edu}
									<div>
										<div class="mb-2 flex items-start justify-between">
											<div>
												<h3 class="text-xl font-bold">{edu.degree}</h3>
												<p class="text-primary">{edu.institution}</p>
											</div>
											<span class="text-sm text-dark-100">{edu.period}</span>
										</div>
										<p class="text-dark-100">{edu.description}</p>
									</div>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</section>
