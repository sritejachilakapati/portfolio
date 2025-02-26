<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  let showExperience = true;
  let inView = false;

  // Experience data
  const experiences = [
    {
      title: "Senior Fullstack Engineer",
      company: "Animall Technologies",
      period: "2022 - Present",
      description:
        "Leading end-to-end development and deployment of scalable web applications using Next.js, Nest.js, and AWS.",
    },
    {
      title: "Software Engineer",
      company: "Mphasis Limited",
      period: "2021-2022",
      description:
        "Led the migration of a legacy premium calculation service from C# .Net to Node.js, significantly improving system scalability and maintainability.",
    },
    {
      title: "Associate Software Engineer",
      company: "Mphasis Limited",
      period: "2020 - 2021",
      description:
        "Spearheaded the development of a global travel insurance platform, partnering with over 100 airlines across EMEA and APAC to streamline insurance purchase processes.",
    },
    {
      title: "Trainee Associate Software Engineer",
      company: "Mphasis Limited",
      period: "2019 - 2020",
      description:
        "Coordinated effectively across global teams and time zones, ensuring seamless collaboration with QA, Business, and Development units, contributing to a 20% reduction in project delivery times.",
    },
  ];

  // Education data
  const education = [
    {
      degree: "Server-side Development with NodeJS, Express, and MongoDB",
      institution: "Coursera (Hong Kong University of Science and Technology)",
      period: "2021",
      description:
        "Focused on backend development, RESTful API design, authentication, and database integration using MongoDB. Implemented best practices for server-side programming and performance optimization.",
    },
    {
      degree: "Full-Stack Web Development with React Specialization",
      institution: "Coursera (Hong Kong University of Science and Technology)",
      period: "2021",
      description:
        "Completed a specialization covering front-end development with React, back-end development with Node.js and Express, and database management with MongoDB. Gained hands-on experience in building and deploying full-stack applications.",
    },
    {
      degree: "Bachelor of Technology",
      institution: "Sri Vasavi Engineering College (JNTU Kakinada)",
      period: "2015 - 2019",
      description:
        "Graduated with a CGPA of 7.6, gaining a strong foundation in electronic systems, communication networks, and programming. Developed problem-solving skills and worked on multiple projects involving embedded systems and software development.",
    },
  ];

  function toggleExperience() {
    showExperience = true;
  }

  function toggleEducation() {
    showExperience = false;
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

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  });
</script>

<section id="about" class="py-24 relative">
  <div class="container max-w-7xl mx-auto px-6">
    {#if inView}
      <div class="flex flex-col md:flex-row gap-16 items-center">
        <div class="md:w-1/2" in:fly={{ y: 50, duration: 800 }}>
          <h2 class="text-3xl md:text-4xl font-bold mb-8 relative inline-block">
            About Me
            <span
              class="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded"
            />
          </h2>
          <p class="text-dark-100 mb-6">
            I'm a Senior Fullstack Engineer with a focus on frontend
            technologies. With 6 years of expertise in React, TypeScript, and
            Next.js, I build beautiful, performant, and accessible web
            applications that deliver exceptional user experiences.
          </p>

          <p class="text-dark-100 mb-6">
            As a developer who values clean, maintainable code, I'm passionate
            about creating intuitive interfaces and optimizing for performance.
            My fullstack experience allows me to seamlessly integrate frontend
            and backend systems.
          </p>

          <p class="text-dark-100 mb-8">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge through
            technical articles and mentoring.
          </p>

          <div class="flex gap-4">
            <button
              on:click={toggleExperience}
              class="px-5 py-2 rounded font-medium {showExperience
                ? 'bg-primary hover:bg-primary/90'
                : 'border border-primary hover:bg-primary/10'} transition-colors"
            >
              Experience
            </button>
            <button
              on:click={toggleEducation}
              class="px-5 py-2 rounded font-medium {!showExperience
                ? 'bg-primary hover:bg-primary/90'
                : 'border border-primary hover:bg-primary/10'} transition-colors"
            >
              Education
            </button>
          </div>
        </div>
        <div class="md:w-1/2" in:fly={{ y: 50, duration: 800, delay: 200 }}>
          {#if showExperience}
            <div
              class="card-gradient border border-white border-opacity-5 rounded-2xl p-8 relative"
              in:fade={{ duration: 300 }}
            >
              <div
                class="absolute -top-3 -right-3 bg-primary text-sm font-medium py-1 px-3 rounded-full"
              >
                Experience
              </div>
              <div class="space-y-6">
                {#each experiences as experience}
                  <div>
                    <div class="flex justify-between items-start mb-2">
                      <div>
                        <h3 class="text-xl font-bold">{experience.title}</h3>
                        <p class="text-primary">{experience.company}</p>
                      </div>
                      <span class="text-dark-100 text-sm"
                        >{experience.period}</span
                      >
                    </div>
                    <p class="text-dark-100">{experience.description}</p>
                  </div>
                {/each}
              </div>
            </div>
          {:else}
            <div
              class="card-gradient border border-white border-opacity-5 rounded-2xl p-8 relative"
              in:fade={{ duration: 300 }}
            >
              <div
                class="absolute -top-3 -right-3 bg-primary text-sm font-medium py-1 px-3 rounded-full"
              >
                Education
              </div>
              <div class="space-y-6">
                {#each education as edu}
                  <div>
                    <div class="flex justify-between items-start mb-2">
                      <div>
                        <h3 class="text-xl font-bold">{edu.degree}</h3>
                        <p class="text-primary">{edu.institution}</p>
                      </div>
                      <span class="text-dark-100 text-sm">{edu.period}</span>
                    </div>
                    <p class="text-dark-100">{edu.description}</p>
                  </div>
                {/each}
              </div>
            </div>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</section>
