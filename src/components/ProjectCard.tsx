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
    <div className="bg-gray-900 rounded-lg shadow-lg p-6 transition-transform transform hover:-translate-y-1">
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <p className="mb-4">
        <span className="font-semibold text-gray-200">Tech Stack: </span>
        <span className="text-gray-300">{techStack.join(", ")}</span>
      </p>
      <div className="flex gap-4">
        <Link
          href={githubLink}
          className="text-blue-400 hover:underline flex items-center gap-2"
          passHref
          target="_blank"
        >
          <FaGithub />
          <span>View on GitHub</span>
        </Link>
        {liveDemoLink && (
          <Link
            href={liveDemoLink}
            className="text-green-400 hover:underline flex items-center gap-2"
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
