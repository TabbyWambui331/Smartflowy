import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-blue-900 flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full bg-blue-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Contact Us</h2>
        <p className="text-center mb-8 text-blue-800">
          We'd love to hear from you! Reach out using the information below or fill out the form.
        </p>

        {/* Contact Info */}
        <div className="mb-8">
          <p className="mb-2"><span className="font-semibold">Phone:</span> <a href="tel:+254701361642" className="text-blue-600 hover:underline">+254 701 361 642</a></p>
          <p className="mb-2"><span className="font-semibold">Email:</span> <a href="mailto:smartflow.co.ke" className="text-blue-600 hover:underline">smartflow.co.ke</a></p>
          <p><span className="font-semibold">Location:</span> Nairobi, Kenya</p>
        </div>

        {/* Contact Form */}
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-3 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
