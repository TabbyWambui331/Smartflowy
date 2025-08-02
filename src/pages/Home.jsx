import React from 'react';
import Card from '../components/card';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Empowering Businesses Online</h1>
          <p className="text-lg md:text-xl mb-6">We help businesses scale through smart online strategies and AI integration.</p>
          <a href="/services" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">
            Our Services
          </a>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">What We Offer</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          <Card
            title="Digital Transformation"
            description="Helping corporate brands adapt and grow in the digital age."
            buttonText="Explore"
            onClick={() => alert("More on Digital Transformation")}
          />
          <Card
            title="AI Integration"
            description="Boost productivity with tailored AI tools for your business."
            buttonText="Learn More"
            onClick={() => alert("AI services coming soon")}
          />
          <Card
            title="Online Strategy"
            description="Customized plans to increase your online visibility and leads."
            buttonText="Get Started"
            onClick={() => alert("Let’s build your strategy")}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-12 px-6 md:px-20 text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to Elevate Your Business?</h3>
        <p className="mb-6">Contact us today and let’s build your success online.</p>
        <a href="/contact" className="bg-white text-blue-700 px-5 py-3 rounded-md font-medium hover:bg-gray-200 transition">
          Contact Us
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
