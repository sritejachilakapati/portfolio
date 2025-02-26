<script>
  import Hero from "$lib/components/Hero.svelte";
  import About from "$lib/components/About.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Contact from "$lib/components/Contact.svelte";

  import { onMount } from "svelte";
  import { initParticles } from "$lib/utils/animations.js";

  onMount(() => {
    // Initialize particles with a small delay to ensure DOM is ready
    setTimeout(() => {
      initParticles("particles-container");
    }, 100);
  });
</script>

<svelte:head>
  <meta
    name="description"
    content="Portfolio of Ramcharan Sriteja Chilakapati, a Frontend-focused Senior Fullstack Engineer."
  />
</svelte:head>

<Hero />
<About />
<Skills />
<Projects />
<Contact />
