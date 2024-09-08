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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <form
      className="bg-gray-800 rounded-lg p-6 w-full mx-auto"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className="mb-4">
        <label className="block text-gray-300 mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-300 mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg resize-none"
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
