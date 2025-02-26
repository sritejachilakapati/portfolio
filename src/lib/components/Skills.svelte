<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import SkillCard from "./SkillCard.svelte";

  let inView = false;

  const frontendSkills = [
    { name: "React / Next.js", percentage: 95 },
    { name: "TypeScript", percentage: 90 },
    { name: "CSS / Tailwind", percentage: 92 },
  ];

  const backendSkills = [
    { name: "Node.js / Express", percentage: 88 },
    { name: "Nest.js", percentage: 85 },
    { name: "PostgreSQL / MongoDB", percentage: 82 },
  ];

  const devOpsSkills = [
    { name: "Git / GitHub", percentage: 90 },
    { name: "Docker / AWS", percentage: 80 },
    { name: "CI/CD", percentage: 85 },
  ];

  const uiUxSkills = [
    { name: "Responsive Design", percentage: 95 },
    { name: "Design Systems", percentage: 90 },
    { name: "Figma", percentage: 75 },
  ];

  const performanceSkills = [
    { name: "Web Vitals", percentage: 92 },
    { name: "Lighthouse Audits", percentage: 88 },
    { name: "SEO Optimization", percentage: 85 },
  ];

  const softSkills = [
    { name: "Team Leadership", percentage: 90 },
    { name: "Problem Solving", percentage: 95 },
    { name: "Communication", percentage: 92 },
  ];

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

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  });
</script>

<section id="skills" class="py-24 bg-dark-300/50">
  <div class="container max-w-7xl mx-auto px-6">
    <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">
      <span class="relative inline-block">
        My Skills
        <span
          class="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-primary rounded"
        />
      </span>
    </h2>

    {#if inView}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div in:fly={{ y: 50, duration: 500, delay: 100 }}>
          <SkillCard
            title="Frontend Development"
            icon="layout"
            skills={frontendSkills}
          />
        </div>

        <div in:fly={{ y: 50, duration: 500, delay: 200 }}>
          <SkillCard
            title="Backend Development"
            icon="server"
            skills={backendSkills}
          />
        </div>

        <div in:fly={{ y: 50, duration: 500, delay: 300 }}>
          <SkillCard title="DevOps & Tools" icon="code" skills={devOpsSkills} />
        </div>

        <div in:fly={{ y: 50, duration: 500, delay: 400 }}>
          <SkillCard title="UI/UX Design" icon="brush" skills={uiUxSkills} />
        </div>

        <div in:fly={{ y: 50, duration: 500, delay: 500 }}>
          <SkillCard
            title="Performance Optimization"
            icon="zap"
            skills={performanceSkills}
          />
        </div>

        <div in:fly={{ y: 50, duration: 500, delay: 600 }}>
          <SkillCard title="Soft Skills" icon="users" skills={softSkills} />
        </div>
      </div>
    {/if}
  </div>
</section>
