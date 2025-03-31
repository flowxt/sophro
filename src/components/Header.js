"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Gérer le défilement et la détection de section active
  useEffect(() => {
    const handleScroll = () => {
      // Mise à jour de l'état de défilement
      setIsScrolled(window.scrollY > 20);

      // Détection de la section active
      const sections = [
        "hero",
        "sophro-analyse",
        "constellations",
        "magnetisme",
        "pour-qui",
        "a-propos",
        "cabinet",
        "contact",
      ];

      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation pour la navigation
  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const isActive = (section) => activeSection === section;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-white/60 backdrop-blur-lg shadow-lg shadow-black/5 border-b border-white/20"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`text-2xl font-bold transition-all duration-300 ${
              isScrolled ? "text-[#A45C40]" : "text-[#A45C40]"
            }`}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Harmonie & Sens
            </motion.div>
          </Link>

          {/* Navigation desktop */}
          <motion.nav
            className="hidden md:flex items-center space-x-1"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            {[
              { href: "#sophro-analyse", label: "Sophro-Analyse" },
              { href: "#constellations", label: "Constellations" },
              { href: "#magnetisme", label: "Magnétisme" },
              { href: "#pour-qui", label: "Pour qui ?" },
              { href: "#a-propos", label: "À propos" },
            ].map((item) => (
              <motion.div key={item.href} variants={itemVariants}>
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                    isActive(item.href.substring(1))
                      ? "text-[#A45C40]"
                      : "text-gray-700 hover:text-[#A45C40]"
                  }`}
                >
                  {item.label}
                  {isActive(item.href.substring(1)) && (
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F9D1AB] rounded-full"
                      layoutId="activeSection"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className="absolute inset-0 rounded-full bg-[#F9D1AB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} className="ml-2">
              <Link
                href="#contact"
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? "bg-[#F9D1AB] text-white shadow-md shadow-[#F9D1AB]/20 hover:bg-[#E5B78F]"
                    : "bg-[#F9D1AB] text-white shadow-md shadow-[#F9D1AB]/20 hover:bg-[#E5B78F]"
                }`}
              >
                Contact
              </Link>
            </motion.div>
          </motion.nav>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-sm text-gray-700 transition-all duration-300 hover:bg-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span className="sr-only">
              {isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            </span>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
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
                className="w-5 h-5"
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
          <motion.nav
            className="md:hidden mt-4 py-5 px-4 rounded-xl bg-white/90 backdrop-blur-lg border border-white/20 shadow-lg"
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3">
              {[
                { href: "#sophro-analyse", label: "Sophro-Analyse" },
                { href: "#constellations", label: "Constellations" },
                { href: "#magnetisme", label: "Magnétisme" },
                { href: "#pour-qui", label: "Pour qui ?" },
                { href: "#a-propos", label: "À propos" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2.5 rounded-lg transition-colors ${
                    isActive(item.href.substring(1))
                      ? "bg-[#F9D1AB]/10 text-[#A45C40] font-medium"
                      : "text-gray-700 hover:bg-[#F9D1AB]/5 hover:text-[#A45C40]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-2 mt-2 border-t border-gray-100">
                <Link
                  href="#contact"
                  className="w-full flex items-center justify-center px-3 py-3 bg-[#F9D1AB] text-white rounded-lg font-medium shadow-sm hover:bg-[#E5B78F] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contactez-moi
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
