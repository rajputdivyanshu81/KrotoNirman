import React from 'react';

function Resources() {
  return (
    <section id='resources'  className="py-20 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">
          Explore Our Resources
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300">
          Access a variety of materials to enhance your learning experience
        </p>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Tutorials</h3>
            <p className="text-gray-600 dark:text-gray-300">Step-by-step guides to help you master new skills.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Webinars</h3>
            <p className="text-gray-600 dark:text-gray-300">Join live sessions with industry experts.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">E-books</h3>
            <p className="text-gray-600 dark:text-gray-300">Download comprehensive guides on various topics.</p>
          </div>
        </div>

        {/* Help Center Section */}
        <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
          <div className="text-4xl mb-4">❓</div>
          <h3 className="text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Help Center</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Find answers to common questions and get support.</p>
          <button className="bg-blue-600 dark:bg-blue-700 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-300 transform hover:scale-105">
            Visit Help Center
          </button>
        </div>

        {/* Blog Section */}
        <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-400">From Our Blog</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Boost Your Productivity</h4>
              <p className="text-gray-600 dark:text-gray-300">Learn tips and tricks to enhance your workflow.</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h4 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Latest Industry Trends</h4>
              <p className="text-gray-600 dark:text-gray-300">Stay updated with the latest trends in the industry.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resources;
