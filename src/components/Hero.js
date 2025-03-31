"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { WavyBackground } from "./ui/wavy-background";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Palette de couleurs rosées pâles qui complète le bronze
  const roseColors = [
    "#FADCE4", // rose très pâle
    "#F9C6D2", // rose poudré
    "#F2BED1", // rose délicat
    "#EDABC8", // rose clair
    "#FADDE1", // rose doux
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* WavyBackground animation avec couleurs rosées */}
      {isClient && (
        <WavyBackground
          colors={roseColors}
          waveWidth={50}
          backgroundFill="rgba(255, 255, 255, 0.9)"
          blur={10}
          speed="slow"
          waveOpacity={0.2}
          slope={0.08}
          diagonal={false}
          containerClassName="absolute inset-0"
          className="w-full"
        >
          {/* Aucun contenu à l'intérieur du WavyBackground */}
        </WavyBackground>
      )}

      {/* Overlay avec teinte bronze très légère */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F9D1AB]/5 via-transparent to-[#A45C40]/5"></div>

      {/* Formes décoratives */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#F9D1AB]/10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#A45C40]/10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Retrouvez votre <span className="text-[#F9D1AB]">équilibre</span> et
            votre <span className="text-[#A45C40]">bien-être</span>
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
              className="px-8 py-3 bg-[#F9D1AB] text-white rounded-full hover:bg-[#E5B78F] transition-colors text-lg font-medium shadow-md"
            >
              Prendre rendez-vous
            </Link>
            <Link
              href="#approches"
              className="px-8 py-3 bg-white text-[#A45C40] border border-[#F9D1AB] rounded-full hover:bg-[#FDF6F0] transition-colors text-lg font-medium shadow-sm"
            >
              Découvrir mes approches
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// #F9D1AB couleur bronze clair
// #A45C40 couleur bronze foncé
