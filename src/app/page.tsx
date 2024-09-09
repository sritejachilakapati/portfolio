import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import DirectContact from "@/components/DirectContact";
import Technologies from "@/components/Technologies";
import profilePic from "../../public/profile.jpg";
import { TECHNOLOGIES } from "@/constants/technologies";
// import profilePic from "../../public/profile.png";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center md:flex-row md:gap-10">
        <div className="w-full">
          <h1 className="mb-6 text-3xl font-bold md:text-5xl">
            Hi, I'm Sriteja R Chilakapati
          </h1>
          <p className="mb-4 text-lg text-gray-400">
            I'm a Senior Full Stack Developer currently working at Animall
            Technologies. <br />I specialize in building scalable, maintainable,
            and efficient web applications.
          </p>
          <p className="text-lg text-gray-400">
            With a strong background in both front-end and back-end
            technologies, I enjoy solving complex problems and delivering
            high-quality software. <br />
            Let's collaborate and create something amazing.
          </p>
        </div>
        <Image
          src={profilePic}
          alt="Sriteja R Chilakapati"
          className="mx-auto mt-6 hidden h-96 w-96 rounded-full object-contain drop-shadow-[0px_10px_8px_rgba(90,0,0,0.6)] md:mr-0 md:mt-0 md:block"
        />
      </section>

      {/* Technologies Section */}
      <section className="mt-10">
        <h2 className="mb-6 text-2xl font-bold md:text-4xl">
          My Arsenal of Technologies
        </h2>
        <Technologies list={TECHNOLOGIES} />
      </section>

      {/* Projects Section */}
      <section className="mt-10">
        <h2 className="mb-6 text-2xl font-bold md:text-4xl">
          Creations & Innovations
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="MovieTix"
            description="An online movie ticket booking platform built with Golang and PostgreSQL."
            techStack={["Golang", "PostgreSQL", "Gorilla Mux"]}
            githubLink="https://github.com/sritejachilakapati/movietix"
          />
          <ProjectCard
            title="Election Portal"
            description="A comprehensive election portal built with MongoDB and Node.js."
            techStack={["Node.js", "MongoDB", "Passport.js"]}
            githubLink="https://github.com/sritejachilakapati/Common-Election-Portal-Server"
          />
        </div>
      </section>

      {/* Contact Form */}
      <section className="mt-10">
        <h2 className="mb-6 text-2xl font-bold md:text-4xl">
          Connect & Collaborate
        </h2>
        <div className="flex flex-col gap-8 md:flex-row">
          <ContactForm />
          <DirectContact />
        </div>
      </section>
    </>
  );
}
