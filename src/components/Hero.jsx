// src/components/Hero.jsx
import React from 'react';

function Hero() {
  return (
    <section  id='hero'   className=" py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden relative">
      <div className="container mx-auto text-center relative z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 transform transition duration-700 hover:scale-105">
          Create Engaging Educational Content with Kroto
        </h1>
        <p className="text-xl md:text-2xl mb-8 transform transition duration-700 hover:scale-105 max-w-3xl mx-auto">
          Guide your students with professional videos and AI-powered assistance
        </p>
        <button className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 transform hover:scale-110 hover:shadow-2xl">
          Get Started
        </button>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute left-0 bottom-0 h-full w-48 text-white transform -translate-x-1/2 opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <svg className="absolute right-0 top-0 h-full w-48 text-white transform translate-x-1/2 opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;