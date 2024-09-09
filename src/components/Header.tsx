"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiCode } from "react-icons/hi";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-4 py-6 md:px-8">
      <Link href="/" passHref>
        <h1 className="text-3xl font-extrabold">
          <HiCode />
        </h1>
      </Link>
      <nav>
        <ul className="flex gap-6">
          <Link
            href="https://github.com/sritejachilakapati"
            passHref
            target="_blank"
          >
            <li className="flex items-center gap-2">
              <FaGithub className="text-xl" />
              <span className="hidden md:inline">GitHub</span>
            </li>
          </Link>
          <Link
            href="https://www.linkedin.com/in/sritejachilakapati"
            passHref
            target="_blank"
          >
            <li className="flex items-center gap-2">
              <FaLinkedin className="text-xl" />
              <span className="hidden md:inline">LinkedIn</span>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
