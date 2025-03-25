"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function APropos() {
  return (
    <section
      id="a-propos"
      className="py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50"
    >
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
              À propos de Stéphanie
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-6 text-teal-700">
                Votre thérapeute en Haute-Savoie
              </h3>

              <p className="text-gray-700 mb-4">
                Diplômée en Sophro-Analyse et formée aux Constellations
                Familiales ainsi qu'au Magnétisme, j'accompagne des personnes de
                tous horizons dans leur cheminement vers le mieux-être et
                l'équilibre.
              </p>

              <p className="text-gray-700 mb-4">
                Mon cabinet situé en Haute-Savoie, à Allèves, vous accueille
                dans un espace chaleureux et bienveillant propice à la détente
                et à l'introspection.
              </p>

              <p className="text-gray-700 mb-6">
                Mon approche est holistique, considérant chaque personne dans sa
                globalité - corps, âme et esprit. Je m'adapte à vos besoins
                spécifiques pour vous proposer un accompagnement personnalisé
                qui vous permettra de libérer vos blocages et de retrouver votre
                chemin vers l'harmonie.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary">
                  Prendre rendez-vous
                </a>
                <a href="#pour-qui" className="btn-secondary">
                  Est-ce pour moi ?
                </a>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-white shadow-xl">
                <Image
                  src="/images/stephanie.jpg"
                  alt="Stéphanie Lassagne, thérapeute en Sophro-Analyse, Constellations Familiales et Magnétisme en Haute-Savoie"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
