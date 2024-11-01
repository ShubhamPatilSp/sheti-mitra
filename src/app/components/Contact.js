"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg h-32"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Support: support@shetimitra.com
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-600">
                📱
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600">
                📧
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600">
                💬
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
