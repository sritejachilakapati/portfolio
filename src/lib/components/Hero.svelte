<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { ArrowRightIcon } from "./icons";

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
    { id: "react", img: "/images/techstack/react-icon.svg" },
    { id: "nextjs", img: "/images/techstack/nextjs-icon.svg" },
    { id: "javascript", img: "/images/techstack/javascript-icon.svg" },
    { id: "typescript", img: "/images/techstack/typescript-icon.svg" },
    { id: "tailwind", img: "/images/techstack/tailwind-icon.svg" },
    { id: "nodejs", img: "/images/techstack/nodejs-icon.svg" },
    { id: "express", img: "/images/techstack/express-icon.svg" },
    { id: "postgresql", img: "/images/techstack/postgresql-icon.svg" },
    { id: "mongo", img: "/images/techstack/mongo-icon.svg" },
    { id: "graphql", img: "/images/techstack/graphql-icon.svg" },
    { id: "docker", img: "/images/techstack/docker-icon.svg" },
    { id: "aws", img: "/images/techstack/aws-icon.svg" },
    { id: "gcp", img: "/images/techstack/gcp-icon.svg" },
    { id: "golang", img: "/images/techstack/golang-icon.svg" },
  ];
</script>

<section
  id="hero"
  class="min-h-screen flex items-center relative overflow-hidden pt-16"
>

  <!-- Animated particles -->
  <div id="particles-container" class="absolute inset-0 z-0" />

  <div class="container max-w-7xl mx-auto px-6 z-10">
    {#if loaded}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div in:fly={{ y: 50, duration: 1000 }}>
          <div class="mb-4">
            <span
              class="inline-block py-1 px-3 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4"
              >Senior Fullstack Engineer</span
            >
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span class="block">Hi, I'm</span>
              <span class="block text-primary">Ramcharan Sriteja</span>
              <span class="block">Chilakapati</span>
            </h1>
            <p class="text-dark-100 text-xl mb-8">
              Frontend-focused fullstack developer crafting beautiful,
              performant, and accessible web experiences.
            </p>
          </div>
          <div class="flex flex-wrap gap-4">
            <a
              href="#projects"
              class="button-gradient hover:opacity-90 transition-opacity px-8 py-3 rounded-lg font-medium inline-flex items-center"
            >
              View My Work
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </a>
            <a
              href="#contact"
              class="border border-primary hover:bg-primary hover:bg-opacity-10 transition-colors px-8 py-3 rounded-lg font-medium"
              >Contact Me</a
            >
          </div>
        </div>
        <div
          class="relative hidden lg:block"
          in:fly={{ x: 50, duration: 1000, delay: 300 }}
        >
          <div
            class="relative w-full h-96 animate-[float_6s_ease-in-out_infinite]"
          >
            <div
              class="absolute top-0 left-0 w-full h-full bg-primary rounded-full filter blur-3xl opacity-20"
            />
            <img
              src="/images/hero-illustration.jpg"
              alt="Developer Illustration"
              class="relative z-10 mx-auto"
            />
          </div>
        </div>
      </div>

      <!-- Tech stack slider -->
      <div
        class="mt-24 overflow-hidden"
        in:fade={{ duration: 1000, delay: 600 }}
      >
        <h3 class="text-center text-dark-100 mb-8 text-lg">Tech Stack</h3>
        <div class="relative w-full overflow-hidden whitespace-nowrap">
          <div class="flex gap-8 items-center w-max pl-8" class:animate-marquee={startMarquee}>
            {#each techStack.concat(techStack) as tech}
              <div
                class="flex-shrink-0 flex-grow-0 basis-auto flex items-center justify-center w-24 h-24 rounded-xl bg-white/80 backdrop-blur-sm"
              >
                <img
                  class="drop-shadow"
                  src={tech.img}
                  alt={tech.id}
                  width="48px"
                  height="48px"
                />
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/if}
  </div>

  <!-- Scroll down indicator -->
  <div
    class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
  >
    <span class="text-dark-100 text-sm mb-2">Scroll Down</span>
    <div
      class="w-6 h-10 border-2 border-dark-100 rounded-full flex justify-center"
    >
      <div class="w-2 h-2 bg-primary rounded-full mt-2 animate-bounce" />
    </div>
  </div>
</section>
