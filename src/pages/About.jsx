import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Header Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-4 text-lg md:text-xl">
            Learn more about our mission, values, and the people behind Smartflow Consultants.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              Smartflow Consultants is a digital transformation firm committed to helping African businesses thrive in the digital age. 
              We provide strategic consulting, automation, AI integration, and digital marketing services tailored to the needs of SMEs and corporates.
            </p>
          </div>
          <div>
            <img
              src="https://source.unsplash.com/600x400/?business,teamwork"
              alt="Our team"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To empower businesses with digital solutions that enhance productivity, innovation, and growth.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become Africa’s most trusted consulting partner for digital transformation and AI integration.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-lg text-blue-500 mb-1">Integrity</h4>
              <p className="text-gray-700">We act with honesty, transparency, and accountability in all that we do.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-blue-500 mb-1">Innovation</h4>
              <p className="text-gray-700">We embrace change and leverage the latest technology to solve real-world problems.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-blue-500 mb-1">Excellence</h4>
              <p className="text-gray-700">We are committed to delivering quality and exceeding expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="text-lg font-semibold mb-2">Smartflow Consultants</h4>
            <p>Empowering African SMEs with digital tools and strategic support.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <p>Email: hello@smartflow.africa</p>
            <p>Phone: +254 700 000000</p>
            <p>Location: Nairobi, Kenya</p>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-blue-200">
          &copy; {new Date().getFullYear()} Smartflow Consultants. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default About;
