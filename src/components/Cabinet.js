"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Cabinet() {
  const [activeImage, setActiveImage] = useState(null);

  const images = [
    {
      src: "/images/cabinet.jpg",
      alt: "Cabinet de thérapie en Haute-Savoie - Espace d'accueil chaleureux",
    },
    {
      src: "/images/cabinet2.jpg",
      alt: "Salle de consultation pour Sophro-Analyse et thérapies à Annecy",
    },
    {
      src: "/images/cabinet3.jpg",
      alt: "Espace de détente du cabinet thérapeutique en Haute-Savoie",
    },
  ];

  const openFullscreen = (index) => {
    setActiveImage(index);
  };

  const closeFullscreen = () => {
    setActiveImage(null);
  };

  return (
    <section id="cabinet" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mon Cabinet en Haute-Savoie
            </h2>
            <div className="w-20 h-1 bg-[#F9D1AB] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un espace chaleureux et accueillant à Allèves pour vous
              accompagner dans votre processus thérapeutique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-[1.02]"
                onClick={() => openFullscreen(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <p className="text-sm">Cliquez pour agrandir</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700">
              Mon cabinet à Annecy vous accueille dans un espace de sérénité où
              vous pourrez vous reconnecter à vous-même.
              <br />
              Prenez rendez-vous pour découvrir ce lieu dédié au bien-être et à
              la thérapie en Haute-Savoie.
            </p>

            <div className="mt-8">
              <a href="#contact" className="btn-primary">
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal pour affichage plein écran */}
      {activeImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeFullscreen}
        >
          <div className="relative w-full max-w-4xl h-auto max-h-[80vh]">
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 z-10"
              onClick={(e) => {
                e.stopPropagation();
                closeFullscreen();
              }}
            >
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
            </button>

            <div className="relative w-full h-[70vh]">
              <Image
                src={images[activeImage].src}
                alt={images[activeImage].alt}
                fill
                style={{ objectFit: "contain" }}
                sizes="100vw"
                priority
              />
            </div>

            <p className="text-white text-center mt-4">
              {images[activeImage].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
