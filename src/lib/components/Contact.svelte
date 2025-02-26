<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import {
    MailIcon,
    LocationIcon,
    GithubIcon,
    LinkedinIcon,
    ArrowRightIcon,
  } from "./icons";

  let inView = false;
  let name = "";
  let email = "";
  let subject = "";
  let message = "";

  function handleSubmit(e) {
    e.preventDefault();

    // In a real app, you would handle form submission here
    // For now, we'll just log the form data
    console.log({ name, email, subject, message });

    // Reset form
    name = "";
    email = "";
    subject = "";
    message = "";

    // Show success message (in a real app)
    alert("Message sent successfully!");
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

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  });
</script>

<section id="contact" class="py-24 bg-dark-300 bg-opacity-50">
  <div class="container max-w-7xl mx-auto px-6">
    <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">
      <span class="relative inline-block">
        Get In Touch
        <span
          class="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-primary rounded"
        />
      </span>
    </h2>

    {#if inView}
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div class="lg:col-span-2" in:fly={{ x: -50, duration: 800 }}>
          <h3 class="text-2xl font-bold mb-4">Let's Connect</h3>
          <p class="text-dark-100 mb-8">
            Whether you have a project in mind or just want to chat about
            technology, feel free to reach out!
          </p>

          <div class="space-y-4 mb-8">
            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 flex items-center justify-center rounded-xl bg-primary bg-opacity-20 text-primary"
              >
                <MailIcon />
              </div>
              <div>
                <h4 class="text-lg font-medium">Email</h4>
                <a
                  href="mailto:hello@sritejach.dev"
                  class="text-primary hover:text-primary hover:text-opacity-80 transition-colors"
                  >hello@sritejach.dev</a
                >
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="w-12 h-12 flex items-center justify-center rounded-xl bg-primary bg-opacity-20 text-primary"
              >
                <LocationIcon />
              </div>
              <div>
                <h4 class="text-lg font-medium">Location</h4>
                <p class="text-dark-100">Bengaluru, KA, IN</p>
              </div>
            </div>
          </div>

          <h3 class="text-2xl font-bold mb-4">Follow Me</h3>
          <div class="flex gap-4">
            <a
              href="https://github.com/sritejachilakapati"
              class="w-12 h-12 flex items-center justify-center rounded-xl bg-primary bg-opacity-20 text-primary hover:bg-primary hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com/in/sritejachilakapati"
              class="w-12 h-12 flex items-center justify-center rounded-xl bg-primary bg-opacity-20 text-primary hover:bg-primary hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <div class="lg:col-span-3" in:fly={{ x: 50, duration: 800 }}>
          <form
            class="card-gradient border border-white border-opacity-5 rounded-2xl p-8"
            on:submit={handleSubmit}
          >
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="name" class="block text-sm font-medium mb-2"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  bind:value={name}
                  class="w-full bg-dark-400 border border-white border-opacity-10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium mb-2"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  bind:value={email}
                  class="w-full bg-dark-400 border border-white border-opacity-10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            <div class="mb-6">
              <label for="subject" class="block text-sm font-medium mb-2"
                >Subject</label
              >
              <input
                type="text"
                id="subject"
                bind:value={subject}
                class="w-full bg-dark-400 border border-white border-opacity-10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Subject"
                required
              />
            </div>

            <div class="mb-6">
              <label for="message" class="block text-sm font-medium mb-2"
                >Message</label
              >
              <textarea
                id="message"
                rows="6"
                bind:value={message}
                class="w-full bg-dark-400 border border-white border-opacity-10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Your Message"
                required
              />
            </div>

            <button
              type="submit"
              class="button-gradient hover:opacity-90 transition-opacity px-8 py-3 rounded-lg font-medium inline-flex items-center"
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
