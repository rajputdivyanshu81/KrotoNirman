// src/components/Features.jsx
import React from 'react';

const features = [
  {
    title: 'Video Recording Guide',
    description: 'Step-by-step instructions for creating professional educational videos',
    icon: '🎥',
  },
  {
    title: 'Video Editing Tips',
    description: 'Learn how to edit your videos for maximum impact and engagement',
    icon: '✂️',
  },
  {
    title: 'AI-Generated Content',
    description: 'Leverage AI to create supplementary materials and enhance your lessons',
    icon: '🤖',
  },
];

function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">Product Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;