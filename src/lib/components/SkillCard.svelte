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

<div class="card-gradient border border-white border-opacity-5 rounded-2xl p-8 hover:border-primary hover:border-opacity-30 transition-all hover:glow h-full">
  <div class="flex items-center gap-4 mb-6">
    <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-primary bg-opacity-20 text-primary">
      {#if IconComponent}
        <svelte:component this={IconComponent} className="h-6 w-6" />
      {/if}
    </div>
    <h3 class="text-xl font-bold">{title}</h3>
  </div>
  <div class="space-y-4">
    {#each skills as skill}
      <div>
        <div class="flex justify-between mb-1">
          <span>{skill.name}</span>
          <span>{skill.percentage}%</span>
        </div>
        <div class="w-full h-2 bg-dark-400 rounded-full overflow-hidden">
          <div class="bg-primary h-full rounded-full" style="width: {skill.percentage}%"></div>
        </div>
      </div>
    {/each}
  </div>
</div>
