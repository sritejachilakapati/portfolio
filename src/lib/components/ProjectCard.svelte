<script>
	import { GithubIcon, ExternalLinkIcon, EyeIcon } from './icons';

	export let project = {
		title: '',
		description: '',
		image: '',
		githubUrl: '',
		demoUrl: '',
		tags: [],
		badge: null // Can be 'New', 'In-Progress', 'Backend Only', etc.
	};

	export let index;

	// Badge color mapping
	const badgeColors = {
		New: 'bg-green-500',
		'In-Progress': 'bg-yellow-500',
		'Backend Only': 'bg-blue-500',
		Prototype: 'bg-purple-500',
		Featured: 'bg-rose-500'
	};

	$: badgeBackgroundColor = (project.badge && badgeColors[project.badge]) || 'bg-gray-500';
</script>

<div
	class="flex flex-col md:flex-row {index % 2 === 1
		? 'md:flex-row-reverse'
		: ''} items-center gap-8 md:gap-16"
>
	<!-- Image side -->
	<div class="group w-full md:w-1/2">
		<div class="relative h-64 overflow-hidden rounded-xl shadow-lg shadow-black/20">
			<!-- Image with conditional click functionality -->
			<button
				class="h-full w-full cursor-default"
				on:click={() => project.demoUrl && window.open(project.demoUrl, '_blank')}
			>
				<img
					src={project.image}
					alt={project.title}
					class="h-full w-full rounded-xl object-cover object-top transition-transform duration-700 group-hover:scale-110 {project.demoUrl
						? 'cursor-pointer'
						: ''}"
				/>

				<!-- Demo overlay indicator -->
				{#if project.demoUrl}
					<div
						class="absolute inset-0 flex cursor-pointer items-center justify-center bg-primary bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-30"
					>
						<div
							class="translate-y-10 transform rounded-full bg-white px-4 py-2 font-medium text-primary opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
						>
							Click to view demo
						</div>
					</div>
				{/if}
			</button>

			<!-- Project status badge if applicable -->
			{#if project.badge}
				<div
					class="absolute top-3 {index % 2 === 1
						? 'left-3'
						: 'right-3'} {badgeBackgroundColor} z-10 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-md"
				>
					{project.badge}
				</div>
			{/if}
		</div>
	</div>

	<!-- Content side - with different alignment based on index -->
	<div class="w-full md:w-1/2 {index % 2 === 0 ? 'md:text-left' : 'md:text-right'}">
		<div
			class="card-gradient rounded-lg border border-white/5 p-6 md:p-8 {index % 2 === 1
				? 'md:pr-10'
				: 'md:pl-10'}"
		>
			<!-- Project number badge - centered on the timeline -->
			<div
				class="absolute left-1/2 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-primary font-bold text-white shadow-lg md:flex"
			>
				{index + 1}
			</div>

			<h3 class="mb-4 text-2xl font-bold">{project.title}</h3>
			<p class="mb-6 text-dark-100">{project.description}</p>

			<!-- Tags -->
			<div class="mb-6 flex flex-wrap gap-2 {index % 2 === 1 ? 'md:justify-end' : ''}">
				{#each project.tags as tag}
					<span class="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">{tag}</span>
				{/each}
			</div>

			<!-- GitHub link -->
			<div class={index % 2 === 1 ? 'md:text-right' : ''}>
				<a
					href={project.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white transition-colors hover:bg-primary/90"
				>
					<GithubIcon className="h-5 w-5" />
					View on GitHub
				</a>

				{#if project.demoUrl}
					<a
						href={project.demoUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="ml-2 inline-flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-white transition-colors hover:bg-secondary/90"
					>
						<EyeIcon />
						View Demo
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
