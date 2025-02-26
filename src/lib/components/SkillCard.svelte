<script>
	import * as Icons from './icons';

	export let title = '';
	export let icon = '';
	export let skills = [];

	// Function to get the correct icon component
	function getIconComponent(iconName) {
		// Map icon names to component names
		const iconMap = {
			layout: 'LayoutIcon',
			server: 'ServerIcon',
			code: 'CodeIcon',
			brush: 'BrushIcon',
			zap: 'ZapIcon',
			users: 'UsersIcon'
		};

		// Return the component or a default
		return iconMap[iconName] ? Icons[iconMap[iconName]] : null;
	}

	// Get the icon component dynamically
	$: IconComponent = getIconComponent(icon);
</script>

<div
	class="card-gradient hover:glow h-full rounded-2xl border border-white border-opacity-5 p-8 transition-all hover:border-primary hover:border-opacity-30"
>
	<div class="mb-6 flex items-center gap-4">
		<div
			class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary bg-opacity-20 text-primary"
		>
			{#if IconComponent}
				<svelte:component this={IconComponent} className="h-6 w-6" />
			{/if}
		</div>
		<h3 class="text-xl font-bold">{title}</h3>
	</div>
	<div class="space-y-4">
		{#each skills as skill (skill.name)}
			<div>
				<div class="mb-1 flex justify-between">
					<span>{skill.name}</span>
					<span>{skill.percentage}%</span>
				</div>
				<div class="h-2 w-full overflow-hidden rounded-full bg-dark-400">
					<div class="h-full rounded-full bg-primary" style="width: {skill.percentage}%"></div>
				</div>
			</div>
		{/each}
	</div>
</div>
