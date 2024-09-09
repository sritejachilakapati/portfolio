"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <form
      className="mx-auto w-full rounded-lg bg-gray-800 p-6"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className="mb-4">
        <label className="mb-2 block text-gray-300" htmlFor="name">
          Name
        </label>
        <input
          className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-gray-300" htmlFor="email">
          Email
        </label>
        <input
          className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label className="mb-2 block text-gray-300" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full resize-none rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-white"
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
