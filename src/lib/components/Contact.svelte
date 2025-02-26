<script>
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { MailIcon, LocationIcon, GithubIcon, LinkedinIcon, ArrowRightIcon } from './icons';

	let inView = false;
	let name = '';
	let email = '';
	let subject = '';
	let message = '';

	function handleSubmit(e) {
		e.preventDefault();

		// In a real app, you would handle form submission here
		// For now, we'll just log the form data
		console.log({ name, email, subject, message });

		// Reset form
		name = '';
		email = '';
		subject = '';
		message = '';

		// Show success message (in a real app)
		alert('Message sent successfully!');
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

		const section = document.getElementById('contact');
		if (section) observer.observe(section);

		return () => {
			if (section) observer.unobserve(section);
		};
	});
</script>

<section id="contact" class="bg-dark-300 bg-opacity-50 py-24">
	<div class="container mx-auto max-w-7xl px-6">
		<h2 class="mb-16 text-center text-3xl font-bold md:text-4xl">
			<span class="relative inline-block">
				Get In Touch
				<span class="absolute -bottom-2 left-1/4 right-1/4 h-1 rounded bg-primary" />
			</span>
		</h2>

		{#if inView}
			<div class="grid grid-cols-1 gap-12 lg:grid-cols-5">
				<div class="lg:col-span-2" in:fly={{ x: -50, duration: 800 }}>
					<h3 class="mb-4 text-2xl font-bold">Let's Connect</h3>
					<p class="mb-8 text-dark-100">
						Whether you have a project in mind or just want to chat about technology, feel free to
						reach out!
					</p>

					<div class="mb-8 space-y-4">
						<div class="flex items-center gap-4">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary bg-opacity-20 text-primary"
							>
								<MailIcon />
							</div>
							<div>
								<h4 class="text-lg font-medium">Email</h4>
								<a
									href="mailto:hello@sritejach.dev"
									class="text-primary transition-colors hover:text-primary hover:text-opacity-80"
									>hello@sritejach.dev</a
								>
							</div>
						</div>

						<div class="flex items-center gap-4">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary bg-opacity-20 text-primary"
							>
								<LocationIcon />
							</div>
							<div>
								<h4 class="text-lg font-medium">Location</h4>
								<p class="text-dark-100">Bengaluru, KA, IN</p>
							</div>
						</div>
					</div>

					<h3 class="mb-4 text-2xl font-bold">Follow Me</h3>
					<div class="flex gap-4">
						<a
							href="https://github.com/sritejachilakapati"
							class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary bg-opacity-20 text-primary transition-colors hover:bg-primary hover:text-white"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GithubIcon />
						</a>
						<a
							href="https://linkedin.com/in/sritejachilakapati"
							class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary bg-opacity-20 text-primary transition-colors hover:bg-primary hover:text-white"
							target="_blank"
							rel="noopener noreferrer"
						>
							<LinkedinIcon />
						</a>
					</div>
				</div>

				<div class="lg:col-span-3" in:fly={{ x: 50, duration: 800 }}>
					<form
						class="card-gradient rounded-2xl border border-white border-opacity-5 p-8"
						on:submit={handleSubmit}
					>
						<div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
							<div>
								<label for="name" class="mb-2 block text-sm font-medium">Name</label>
								<input
									type="text"
									id="name"
									bind:value={name}
									class="w-full rounded-lg border border-white border-opacity-10 bg-dark-400 px-4 py-3 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
									placeholder="Your Name"
									required
								/>
							</div>
							<div>
								<label for="email" class="mb-2 block text-sm font-medium">Email</label>
								<input
									type="email"
									id="email"
									bind:value={email}
									class="w-full rounded-lg border border-white border-opacity-10 bg-dark-400 px-4 py-3 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
									placeholder="Your Email"
									required
								/>
							</div>
						</div>

						<div class="mb-6">
							<label for="subject" class="mb-2 block text-sm font-medium">Subject</label>
							<input
								type="text"
								id="subject"
								bind:value={subject}
								class="w-full rounded-lg border border-white border-opacity-10 bg-dark-400 px-4 py-3 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
								placeholder="Subject"
								required
							/>
						</div>

						<div class="mb-6">
							<label for="message" class="mb-2 block text-sm font-medium">Message</label>
							<textarea
								id="message"
								rows="6"
								bind:value={message}
								class="w-full rounded-lg border border-white border-opacity-10 bg-dark-400 px-4 py-3 transition-colors focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
								placeholder="Your Message"
								required
							/>
						</div>

						<button
							type="submit"
							class="button-gradient inline-flex items-center rounded-lg px-8 py-3 font-medium transition-opacity hover:opacity-90"
						>
							Send Message
							<ArrowRightIcon className="h-5 w-5 ml-2" />
						</button>
					</form>
				</div>
			</div>
		{/if}
	</div>
</section>
