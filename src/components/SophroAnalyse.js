"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SophroAnalyse() {
  return (
    <section id="sophro-analyse" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              La Sophro-Analyse
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-teal-700">
                Qu'est-ce que la Sophro-Analyse ?
              </h3>
              <p className="text-gray-700 mb-4">
                La Sophro-Analyse est une méthode qui vous permet de libérer
                l'origine, la racine, de tous les scénarios limitants de votre
                vie et d'en comprendre le sens.
              </p>
              <p className="text-gray-700 mb-4">
                Cette méthode fonctionne parce que votre âme est aux commandes.
                Elle va vous prendre la main et vous conduire, étape par étape,
                en toute sécurité, vers le chemin de votre réalisation, pour
                être enfin vous-même.
              </p>
              <p className="text-gray-700 mb-4">
                Chaque personne a sa propre carte du monde et ses propres
                croyances. Les croyances, qu'elles soient positives ou
                limitantes, façonnent la réalité. La Sophro-analyse consiste à
                transformer ces croyances limitantes.
              </p>
              <p className="text-gray-700">
                La Sophro-analyse est une thérapie brève qui se fait en simple
                relaxation (état élargi de conscience). Chaque séance est
                libératrice.
              </p>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
              <div className="absolute inset-0 bg-teal-100"></div>
              <div className="absolute inset-0 flex items-center justify-center text-teal-800">
                <div className="p-8 text-center">
                  <h4 className="text-xl font-semibold mb-4">
                    Comment se déroule une séance ?
                  </h4>
                  <ul className="text-left space-y-2">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>
                        Entretien préliminaire pour définir vos besoins
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>État de relaxation profonde guidée</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Accès aux mémoires et croyances limitantes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Libération émotionnelle</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Compréhension et intégration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>Retour à l'état normal</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
