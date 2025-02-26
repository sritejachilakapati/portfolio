<script>
  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-dark-400 border-t border-white/10 py-12">
  <div class="container max-w-7xl mx-auto px-6">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="mb-6 md:mb-0">
        <a href="/" class="font-bold text-2xl relative">
          <span class="text-white">RS</span>
          <span class="text-primary">.Chilakapati</span>
        </a>
        <p class="text-dark-100 mt-2">Senior Fullstack Engineer</p>
      </div>

      <div class="text-center md:text-right">
        <p class="text-dark-100">
          © {currentYear} Ramcharan Sriteja Chilakapati. All rights reserved.
        </p>
        <p class="text-dark-100 mt-1">Built with Svelte and Tailwind CSS</p>
      </div>
    </div>
  </div>
</footer>
