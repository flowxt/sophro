"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Arrière-plan avec effet de gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FDF6F0]/50 via-white to-[#FDF6F0]"></div>

      {/* Formes décoratives */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#F9D1AB]/20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#A45C40]/10 blur-3xl"></div>
      <div className="absolute top-40 left-20 w-48 h-48 rounded-full bg-[#F9D1AB]/20 blur-2xl"></div>

      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Retrouvez votre <span className="text-[#F9D1AB]">équilibre</span> et
            votre <span className="text-[#F9D1AB]">bien-être</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Thérapies douces en Haute-Savoie pour vous accompagner vers une vie
            plus harmonieuse et équilibrée. Découvrez la Sophro-Analyse, les
            Constellations Familiales et le Magnétisme.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="#contact"
              className="px-8 py-3 bg-[#F9D1AB] text-white rounded-full hover:bg-[#E5B78F] transition-colors text-lg font-medium"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="#approches"
              className="px-8 py-3 bg-white text-[#A45C40] border border-[#F9D1AB] rounded-full hover:bg-[#FDF6F0] transition-colors text-lg font-medium"
            >
              Découvrir mes approches
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// #F9D1AB couleur
