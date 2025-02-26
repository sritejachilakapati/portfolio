<script>
  import { onMount } from "svelte";
  import { fade, slide } from "svelte/transition";
  import { MenuIcon } from "./icons";

  let isScrolled = false;
  let isMobileMenuOpen = false;

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  $: headerBg = isScrolled ? "bg-dark-400/80 shadow-lg" : "bg-dark-400/40";
</script>

<header
  class="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 transition-all duration-300 {headerBg}"
>
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex justify-between items-center py-4">
      <a href="/" class="font-bold text-2xl relative flex items-center">
        <span class="text-white">sritejach</span>
        <span class="text-primary">.dev</span>
        <span class="absolute -bottom-1 left-0 w-8 h-1 bg-primary rounded" />
      </a>
      <nav class="hidden md:block">
        <ul class="flex gap-8">
          <li>
            <a
              href="#about"
              class="text-dark-100 hover:text-white font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >About</a
            >
          </li>
          <li>
            <a
              href="#skills"
              class="text-dark-100 hover:text-white font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >Skills</a
            >
          </li>
          <li>
            <a
              href="#projects"
              class="text-dark-100 hover:text-white font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >Projects</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="text-dark-100 hover:text-white font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
      <button
        class="md:hidden text-white"
        on:click={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <MenuIcon className="h-6 w-6" />
      </button>
    </div>
  </div>

  {#if isMobileMenuOpen}
    <div
      class="md:hidden bg-dark-300 border-b border-white/10"
      transition:slide={{ duration: 200 }}
    >
      <div class="max-w-7xl mx-auto px-6 py-4">
        <ul class="flex flex-col gap-4">
          <li>
            <a
              href="#about"
              class="text-dark-100 hover:text-white font-medium transition-colors block py-2"
              on:click={toggleMobileMenu}>About</a
            >
          </li>
          <li>
            <a
              href="#skills"
              class="text-dark-100 hover:text-white font-medium transition-colors block py-2"
              on:click={toggleMobileMenu}>Skills</a
            >
          </li>
          <li>
            <a
              href="#projects"
              class="text-dark-100 hover:text-white font-medium transition-colors block py-2"
              on:click={toggleMobileMenu}>Projects</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="text-dark-100 hover:text-white font-medium transition-colors block py-2"
              on:click={toggleMobileMenu}>Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  {/if}
</header>
