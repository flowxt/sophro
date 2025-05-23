"use client";

import { motion } from "framer-motion";

export default function Constellations() {
  return (
    <section
      id="constellations"
      className="py-20 bg-[#FDF6F0] overflow-x-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Constellations Familiales à Allèves et Annecy (Haute-Savoie)
            </h2>
            <div className="w-24 h-1 bg-[#F9D1AB] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche thérapeutique puissante pour libérer les schémas
              familiaux inconscients
            </p>
          </div>

          {/* Première section : Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16"
          >
            <div className="md:flex">
              {/* Image décorative ou illustration */}
              <div className="md:w-2/5 bg-[#F9D1AB]/20 p-10 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-[#F9D1AB]/30 flex items-center justify-center">
                  <motion.div
                    className="w-24 h-24 rounded-full bg-[#F9D1AB] flex items-center justify-center text-white"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 3, -3, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-12 h-12"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </motion.svg>
                  </motion.div>
                </div>
              </div>

              {/* Texte explicatif */}
              <div className="md:w-3/5 p-8 md:p-10">
                <h3 className="text-2xl font-semibold mb-4 text-[#A45C40]">
                  Qu&apos;est-ce que les Constellations Familiales ?
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 italic border-l-4 border-[#F9D1AB] pl-4">
                    « On peut oublier ou ignorer le passé, mais il ne disparaît
                    pas ni ne desserre son étreinte. Plus nous l&apos;oublions,
                    ou l&apos;ignorons, plus son emprise s&apos;infiltre dans
                    nos vies et souvent de manière inattendue »
                  </p>
                  <p className="text-gray-700">
                    Approche thérapeutique développée par le psychothérapeute
                    Allemand Bert HELLINGER dans les années 1990, les
                    constellations familiales permettent de mettre en lumière la
                    manière dont un ancêtre a lié son destin au vôtre,
                    inconsciemment. On appelle ça l&apos;intrication.
                  </p>
                  <p className="text-gray-700">
                    L&apos;objectif est que la personne se libère en faisant
                    exprimer ce qui n&apos;a pas pu l&apos;être, en recréant du
                    lien, en faisant en sorte que chacun retrouve sa juste
                    place. Ainsi l&apos;énergie circule à nouveau librement et
                    le système est harmonisé.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Deuxième section : Bienfaits et raisons */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Colonne des bienfaits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 transform transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#F9D1AB] flex items-center justify-center text-white mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#A45C40]">
                  Bienfaits des Constellations
                </h3>
              </div>

              <ul className="space-y-3">
                {[
                  "Libération des schémas familiaux répétitifs",
                  "Résolution des conflits intérieurs",
                  "Guérison des blessures émotionnelles",
                  "Restauration de l'ordre et de l'équilibre",
                  "Amélioration des relations",
                  "Libération des potentiels bloqués",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="text-[#F9D1AB] mr-3 font-bold">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Colonne des raisons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 transform transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#F9D1AB] flex items-center justify-center text-white mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h.01M12 12h.01M15 12h.01M12 16v-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#A45C40]">
                  Pour quelles raisons consteller ?
                </h3>
              </div>

              <ul className="space-y-3">
                {[
                  "Problème de place",
                  "Problème relationnel",
                  "Scénarios répétitifs d'échec",
                  "Croyances de dévalorisation",
                  "Difficulté à concevoir un enfant",
                  "Peurs irrationnelles",
                  "Émotions ou comportements limitants",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#F9D1AB]/20 flex items-center justify-center text-[#A45C40] mr-3">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Note importante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#F9D1AB]/30 to-[#FDF6F0] p-6 rounded-xl border border-[#F9D1AB]/20 shadow-sm"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-[#A45C40]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#A45C40] mb-2">
                  Note importante
                </h4>
                <p className="text-gray-700">
                  La démarche en constellation ne peut se substituer à un avis
                  ou un traitement médical. Ces ateliers sont réservés à toute
                  personne physique d&apos;âge adulte disposant de ses pleines
                  capacités psychologiques et émotionnelles.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <a
              href="#reservations"
              className="inline-block px-8 py-3 bg-[#F9D1AB] text-white rounded-full hover:bg-[#E5B78F] transition-colors text-lg font-medium"
            >
              Réserver une séance
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
