// src/components/MainPage.tsx
import React from "react";
import GitHubProfile from "@/app/components/Profile";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { GetGithubPinnedRepos } from "./lib/serverActions";

const MainPage: React.FC = async () => {
  return (
    <>
      <Header />

      {/* Hero Section with Faded Background Image */}
      <div className="text-white text-center py-20 relative hero-section">
        <h1 className="text-4xl font-bold mb-2 z-10 relative">
          Innovating the Future
        </h1>
        <p className="mb-4 z-10 relative">
          Join us on a journey of technological discovery
        </p>
        <button className="bg-white text-blue-800 px-5 py-2 rounded-full font-bold hover:bg-blue-500 hover:text-white transition duration-300 z-10 relative">
          Learn More
        </button>
      </div>

      {/* Engineers Section */}
      <main className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-8">Meet Your Engineers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GitHubProfile username="ktappdev" />
          <GitHubProfile username="clinteastman01" />
        </div>
      </main>

      {/* Features or Services Section */}
      <section className="container mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add service cards with icons and hover effects */}
        </div>
      </section>

      {/* Contact or CTA Section */}
      <section className="bg-gray-200 py-8 bg-pattern">
        {" "}
        {/* Consider a background pattern */}
        <div className="container mx-auto text-center animate-fadeIn">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p>We are ready to help you. Contact us today.</p>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-full font-bold mt-4 hover:shadow-lg transition duration-300">
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MainPage;
