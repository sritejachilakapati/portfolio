<script>
	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-white/10 bg-dark-400 py-12">
	<div class="container mx-auto max-w-7xl px-6">
		<div class="flex flex-col items-center justify-between md:flex-row">
			<div class="mb-6 md:mb-0">
				<a href="/" class="relative text-2xl font-bold">
					<span class="text-white">RS</span>
					<span class="text-primary">.Chilakapati</span>
				</a>
				<p class="mt-2 text-dark-100">Senior Fullstack Engineer</p>
			</div>

			<div class="text-center md:text-right">
				<p class="text-dark-100">
					© {currentYear} Ramcharan Sriteja Chilakapati. All rights reserved.
				</p>
				<p class="mt-1 text-dark-100">Built with Svelte and Tailwind CSS</p>
			</div>
		</div>
	</div>
</footer>
