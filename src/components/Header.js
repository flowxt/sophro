"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-teal-700">
            Harmonie & Sens
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#sophro-analyse"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Sophro-Analyse
            </Link>
            <Link
              href="#constellations"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Constellations
            </Link>
            <Link
              href="#magnetisme"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Magnétisme
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-4">
            <Link
              href="#sophro-analyse"
              className="text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sophro-Analyse
            </Link>
            <Link
              href="#constellations"
              className="text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Constellations
            </Link>
            <Link
              href="#magnetisme"
              className="text-gray-700 hover:text-teal-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Magnétisme
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
