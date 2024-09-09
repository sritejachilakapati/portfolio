"use client";

import Link from "next/link";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-gray-800 p-6 shadow-lg md:mx-0">
      <h3 className="mb-4 text-2xl font-bold text-white">
        Want to reach out to me directly?
      </h3>
      <p className="mb-4 text-gray-300">
        Feel free to drop me an email. I would be happy to connect with you!
      </p>
      <p className="flex items-center gap-2 text-lg font-semibold text-blue-400">
        <MdEmail />
        <Link
          href="mailto:letsconnect@sritejach.dev"
          className="hover:underline"
          passHref
          target="_blank"
        >
          letsconnect@sritejach.dev
        </Link>
      </p>
    </div>
  );
};

export default ContactInfo;
