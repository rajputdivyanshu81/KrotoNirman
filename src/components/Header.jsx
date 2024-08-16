import React from 'react';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="py-4 px-6 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <span className="text-blue-600 dark:text-blue-400">K</span>
          <span className="text-purple-600 dark:text-purple-400">r</span>
          <span className="text-pink-600 dark:text-pink-400">o</span>
          <span className="text-blue-600 dark:text-orange-400">t</span>
          <span className="text-purple-600 dark:text-purple-400">o</span>
          <span className="text-purple-600 dark:text-green-400">Nirmaan</span>
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">Features</a></li>
            <li><a href="usecase" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">Use Cases</a></li>
            <li><a href="#resources" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">Resources</a></li>
            <li><a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">Pricing</a></li>
            <li><a href="#faq" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300">FAQ</a></li>
          </ul>
        </nav>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110 ${
            darkMode
              ? 'bg-blue-200 text-yellow-500 shadow-inner'
              : 'bg-blue-600 text-yellow-300 shadow-lg'
          }`}
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
