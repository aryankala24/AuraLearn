import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer
      className="relative text-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://miro.medium.com/v2/resize:fit:1400/1*dWJLjc8BsXqOKAN4qGqM6w.gif')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-white">
        {/* Logo + Description */}
        <div>
          <h3 className="text-xl text-red-900 font-bold mb-2">AuraLearn</h3>
          <p className="text-sm text-gray-200">
            Empowering learners with modern, accessible education across the globe.
          </p>
        </div>

        {/* Spacer (optional for layout balance) */}
        <div className="hidden md:block"></div>

        {/* Socials aligned to the right */}
        <div className="md:col-start-4 text-right">
          <h4 className="font-semibold text-red-900 mb-2">Connect :</h4>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li>
              <a href="https://www.linkedin.com/in/aryan-kala-5b4065260/" className="hover:text-white">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/aryankala24/my-projects" className="hover:text-white">GitHub</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-500 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
        {/* Left: Created by Aryan */}
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <img
            src="/aryan.jpg"
            alt="Aryan Kala"
            className="w-8 h-8 rounded-full object-cover"
          />
          <p>
            Created and Designed by <span className="text-red-900 font-semibold">ARYAN KALA</span>
          </p>
        </div>

        {/* Right: Copyright */}
        <div className="text-right w-full md:w-auto">
          &copy; {new Date().getFullYear()} <span className="text-red-900 font-semibold">AuraLearn.</span> All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
