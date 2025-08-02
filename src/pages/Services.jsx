import React from "react";
import Navbar from "../components/Navbar";

const Services = () => {
  const services = [
    {
      title: "Digital Strategy Consultation",
      description:
        "We help businesses define effective online strategies that align with their goals and industry trends.",
    },
    {
      title: "Website & E-commerce Development",
      description:
        "Custom-designed, responsive websites and online stores that convert visitors into customers.",
    },
    {
      title: "AI Integration for Business",
      description:
        "Leverage AI to automate tasks, improve customer service, and gain insights from your data.",
    },
    {
      title: "Social Media Marketing",
      description:
        "Grow your brand with smart, data-driven content and ad strategies across major social platforms.",
    },
    {
      title: "SEO & Content Marketing",
      description:
        "Rank higher in search results and build trust through high-quality, optimized content.",
    },
    {
      title: "Training & Capacity Building",
      description:
        "We train in-house teams and SMEs on digital tools, marketing, and AI usage for long-term success.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-blue-900 px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Our Services</h2>
        <p className="text-lg text-blue-800 mb-12">
          Helping businesses thrive in the digital space through innovation, strategy, and smart technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-50 border border-blue-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
              <p className="text-blue-800">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
