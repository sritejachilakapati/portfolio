<script>
  import { GithubIcon, ExternalLinkIcon } from "./icons";

  export let project = {
    title: "",
    description: "",
    image: "",
    githubUrl: "",
    demoUrl: "",
    tags: [],
    badge: null, // Can be 'New', 'In-Progress', 'Backend Only', etc.
  };

  export let index;

  // Badge color mapping
  const badgeColors = {
    New: "bg-green-500",
    "In-Progress": "bg-yellow-500",
    "Backend Only": "bg-blue-500",
    Prototype: "bg-purple-500",
    Featured: "bg-rose-500",
  };

  $: badgeBackgroundColor =
    (project.badge && badgeColors[project.badge]) || "bg-gray-500";
</script>

<div
  class="flex flex-col md:flex-row {index % 2 === 1
    ? 'md:flex-row-reverse'
    : ''} gap-8 md:gap-16 items-center"
>
  <!-- Image side -->
  <div class="w-full md:w-1/2 group">
    <div
      class="overflow-hidden rounded-xl shadow-lg shadow-black/20 relative h-64"
    >
      <!-- Image with conditional click functionality -->
      <button
        class="cursor-default w-full h-full"
        on:click={() =>
          project.demoUrl && window.open(project.demoUrl, "_blank")}
      >
        <img
          src={project.image}
          alt={project.title}
          class="w-full h-full object-cover rounded-xl object-top transition-transform duration-700 group-hover:scale-110 {project.demoUrl
            ? 'cursor-pointer'
            : ''}"
        />

        <!-- Demo overlay indicator -->
        {#if project.demoUrl}
          <div
            class="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300 cursor-pointer"
          >
            <div
              class="bg-white text-primary font-medium py-2 px-4 rounded-full transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
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
            : 'right-3'} {badgeBackgroundColor} text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-md z-10"
        >
          {project.badge}
        </div>
      {/if}
    </div>
  </div>

  <!-- Content side - with different alignment based on index -->
  <div
    class="w-full md:w-1/2 {index % 2 === 0 ? 'md:text-left' : 'md:text-right'}"
  >
    <div
      class="rounded-lg card-gradient border border-white/5 p-6 md:p-8 {index %
        2 ===
      1
        ? 'md:pr-10'
        : 'md:pl-10'}"
    >
      <!-- Project number badge - centered on the timeline -->
      <div
        class="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary items-center justify-center text-white font-bold shadow-lg z-20"
      >
        {index + 1}
      </div>

      <h3 class="text-2xl font-bold mb-4">{project.title}</h3>
      <p class="text-dark-100 mb-6">{project.description}</p>

      <!-- Tags -->
      <div
        class="flex flex-wrap gap-2 mb-6 {index % 2 === 1
          ? 'md:justify-end'
          : ''}"
      >
        {#each project.tags as tag}
          <span
            class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >{tag}</span
          >
        {/each}
      </div>

      <!-- GitHub link -->
      <div class={index % 2 === 1 ? "md:text-right" : ""}>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
        >
          <GithubIcon className="h-5 w-5" />
          View on GitHub
        </a>

        {#if project.demoUrl}
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2 ml-2 bg-secondary hover:bg-secondary/90 text-white rounded-lg transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            View Demo
          </a>
        {/if}
      </div>
    </div>
  </div>
</div>
