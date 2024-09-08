"use client";

import Link from "next/link";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-auto md:mx-0 shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-white">
        Want to reach out to me directly?
      </h3>
      <p className="text-gray-300 mb-4">
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
