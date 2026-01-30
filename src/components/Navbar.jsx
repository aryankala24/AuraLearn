import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo with SVG from svgrepo */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white hover:text-red-900 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-red-400"
          >
            <path d="M10.5 1A1.5 1.5 0 0 0 9 2.5V4h-.5A2.5 2.5 0 0 0 6 6.5V8H4.5A1.5 1.5 0 0 0 3 9.5v1A1.5 1.5 0 0 0 4.5 12H6v.5A2.5 2.5 0 0 0 8.5 15H9v1.5A1.5 1.5 0 0 0 10.5 18h1a1.5 1.5 0 0 0 1.5-1.5V15h.5A2.5 2.5 0 0 0 16 12.5V12h1.5a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 17.5 8H16v-.5A2.5 2.5 0 0 0 13.5 5H13V2.5A1.5 1.5 0 0 0 11.5 1h-1ZM10 4V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V4h-2ZM7 8V6.5A1.5 1.5 0 0 1 8.5 5H9v3H7Zm2 0V5h2v3H9Zm3 0V5h1.5A1.5 1.5 0 0 1 15 6.5V8h-3Zm0 1h6.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H12V9Zm-1 0v2H4.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H11Zm-2 3v3h-.5A1.5 1.5 0 0 1 7 13.5V13h2Zm1 0h2v3h-2v-3Zm3 0h2v.5a1.5 1.5 0 0 1-1.5 1.5H13v-2Zm-3 4h2v1.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V16Z" />
          </svg>
          AuraLearn
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
          <li>
            <Link to="/quizes" className="hover:text-red-300 transition">
              Quizzes
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-red-300 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
