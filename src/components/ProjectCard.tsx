"use client";

import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveDemoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubLink,
  liveDemoLink,
}) => {
  return (
    <div className="flex transform flex-col gap-2 rounded-lg bg-gray-900 p-6 shadow-lg transition-transform hover:-translate-y-1">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="mb-2 text-gray-300">{description}</p>
      <p className="mb-2">
        <span className="font-semibold text-gray-200">Tech Stack: </span>
        <span className="text-gray-300">{techStack.join(", ")}</span>
      </p>
      <div className="mt-auto flex gap-4">
        <Link
          href={githubLink}
          className="flex items-center gap-2 text-blue-400 hover:underline"
          passHref
          target="_blank"
        >
          <FaGithub />
          <span>View on GitHub</span>
        </Link>
        {liveDemoLink && (
          <Link
            href={liveDemoLink}
            className="flex items-center gap-2 text-green-400 hover:underline"
            passHref
            target="_blank"
          >
            <HiExternalLink />
            <span>Live Demo</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
