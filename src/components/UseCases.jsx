import React from 'react';

function UseCases() {
  return (
    <section id='usecase' className=" py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white overflow-hidden relative mt-20"> {/* Added mt-20 for spacing */}
      <div className="container mx-auto text-center relative z-10 px-4">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 transform transition duration-700 hover:scale-105">
          Use Cases
        </h2>
        <p className="text-xl md:text-2xl mb-8 transform transition duration-700 hover:scale-105 max-w-3xl mx-auto">
          Discover how our solutions can be applied in various scenarios
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 text-blue-600 dark:text-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-2">Use Case 1: Remote Learning</h3>
            <p className="text-lg">Empowering educators and students with seamless remote learning tools.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 text-blue-600 dark:text-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-2">Use Case 2: Virtual Conferences</h3>
            <p className="text-lg">Hosting engaging and interactive virtual conferences with ease.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 text-blue-600 dark:text-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-2">Use Case 3: Healthcare Solutions</h3>
            <p className="text-lg">Facilitating secure and efficient telemedicine services.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 text-blue-600 dark:text-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-2">Use Case 4: E-commerce</h3>
            <p className="text-lg">Streamlining the online shopping experience with innovative solutions.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 text-blue-600 dark:text-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-2">Use Case 5: Financial Services</h3>
            <p className="text-lg">Enhancing financial operations with cutting-edge technology.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 text-blue-600 dark:text-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-semibold mb-2">Use Case 6: Smart Cities</h3>
            <p className="text-lg">Driving innovation in urban development with smart technologies.</p>
          </div>
        </div>
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

export default UseCases;
