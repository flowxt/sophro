"use client";

import { motion } from "framer-motion";

export default function Constellations() {
  return (
    <section id="constellations" className="py-20 bg-teal-50">
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
              Les Constellations Familiales
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-teal-700">
                    Une approche systémique puissante
                  </h3>
                  <p className="text-gray-700 mb-4">
                    « On peut oublier ou ignorer le passé, mais il ne disparaît
                    pas ni ne desserre son étreinte. Plus nous l'oublions, ou
                    l'ignorons, plus son emprise s'infiltre dans nos vies et
                    souvent de manière inattendue »…
                  </p>
                  <p className="text-gray-700 mb-4">
                    Approche thérapeutique développée par le psychothérapeute
                    Allemand Bert HELLINGER dans les années 1990, les
                    constellations familiales permettent de mettre en lumière la
                    manière dont un membre de la famille a lié son destin,
                    inconsciemment, à un de ses ancêtres. On appelle ça
                    l'intrication.
                  </p>
                  <p className="text-gray-700">
                    L'objectif est que la personne se libère en faisant exprimer
                    ce qui n'a pas pu l'être, en recréant du lien, en faisant en
                    sorte que chacun retrouve sa juste place. Ainsi l'énergie
                    circule à nouveau librement et le système est harmonisé.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-teal-700">
                    Pour quelles raisons consteller ?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-0.5">•</span>
                      <span className="text-gray-700">Problème de place</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-0.5">•</span>
                      <span className="text-gray-700">
                        Problème relationnel
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-0.5">•</span>
                      <span className="text-gray-700">
                        Scénarios répétitifs d'échec
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-0.5">•</span>
                      <span className="text-gray-700">
                        Croyances de dévalorisation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-0.5">•</span>
                      <span className="text-gray-700">
                        Difficulté à concevoir un enfant sans explication
                        médicale logique
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-0.5">•</span>
                      <span className="text-gray-700">
                        Peurs irrationnelles
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2 mt-0.5">•</span>
                      <span className="text-gray-700">
                        Émotions ou comportements limitants
                      </span>
                    </li>
                  </ul>

                  <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-amber-800 text-sm">
                      <strong>Note :</strong> La démarche en constellation ne
                      peut se substituer à un avis ou un traitement médical. Ces
                      ateliers sont réservés à toute personne physique d'âge
                      adulte disposant de ses pleines capacités psychologiques
                      et émotionnelles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
