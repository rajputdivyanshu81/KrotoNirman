import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">
              <span className="text-green-600 dark:text-blue-400">K</span>
              <span className="text-purple-600 dark:text-purple-400">r</span>
              <span className="text-pink-600 dark:text-pink-400">o</span>
              <span className="text-red-600 dark:text-red-900">t</span>
              <span className="text-purple-600 dark:text-orange-400">o</span>
          <span className="text-purple-600 dark:text-green-400">Nirmaan</span>

            </h2>
            <p className="text-gray-300">Empowering educators with cutting-edge video and AI tools</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://x.com/DivyanshuRaj81" className="text-gray-300 hover:text-blue-400 transition duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/divyanshu-rajput8171/" className="text-gray-300 hover:text-blue-400 transition duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.268c.878-.805 2.034-1.268 3.25-1.268 2.481 0 4.5 2.019 4.5 4.5v5.5z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">
                <span className="sr-only">YouTube</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186c-.272-1.02-1.072-1.82-2.092-2.092-1.847-.497-9.306-.497-9.306-.497s-7.459 0-9.306.497c-1.02.272-1.82 1.072-2.092 2.092-.497 1.847-.497 5.706-.497 5.706s0 3.859.497 5.706c.272 1.02 1.072 1.82 2.092 2.092 1.847.497 9.306.497 9.306.497s7.459 0 9.306-.497c1.02-.272 1.82-1.072 2.092-2.092.497-1.847.497-5.706.497-5.706s0-3.859-.497-5.706zm-13.498 8.314v-6l6 3-6 3z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.309.975.975 1.247 2.242 1.309 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.309 3.608-.975.975-2.242 1.247-3.608 1.309-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.309-.975-.975-1.247-2.242-1.309-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.309-3.608.975-.975 2.242-1.247 3.608-1.309 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.058-2.418.334-3.29 1.206-.872.872-1.148 2" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">Home</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-blue-400 transition duration-300">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">GDPR Compliance</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">Email</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">Phone</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">Address</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-300">
          © 2024 Kroto. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
