"use client";

import { motion } from "framer-motion";

export default function Magnetisme() {
  return (
    <section id="magnetisme" className="py-20 bg-white">
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
              Le Magnétisme
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="md:flex gap-10">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h3 className="text-2xl font-semibold mb-4 text-teal-700">
                    La méthode
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Après plusieurs années de pratique, Jean-François CAMICAS
                    (magnétiseur à Meaux) a développé sa propre méthode. J'ai le
                    privilège de faire partie des personnes qu'il a formées.
                  </p>

                  <h4 className="text-xl font-semibold mb-3 text-teal-700">
                    Les étapes d'une séance
                  </h4>
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                        1
                      </span>
                      <div className="ml-4">
                        <h5 className="font-medium text-gray-800">
                          Dépollution des corps
                        </h5>
                        <p className="text-gray-600">
                          Libération des énergies négatives accumulées
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                        2
                      </span>
                      <div className="ml-4">
                        <h5 className="font-medium text-gray-800">
                          Purification subtile
                        </h5>
                        <p className="text-gray-600">
                          Préparation au rééquilibrage énergétique
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                        3
                      </span>
                      <div className="ml-4">
                        <h5 className="font-medium text-gray-800">
                          Rééquilibrage énergétique
                        </h5>
                        <p className="text-gray-600">
                          Harmonisation du flux d'énergie et réalignement des
                          chakras
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-teal-700">
                    Les bienfaits
                  </h3>
                  <div className="bg-white rounded-lg p-6 shadow-inner">
                    <p className="text-gray-700 mb-4">
                      Par imposition des mains, le magnétiseur rééquilibre le
                      système énergétique et permet à l'énergie de circuler
                      harmonieusement dans les corps subtils et dans le corps
                      physique.
                    </p>
                    <p className="text-gray-700 mb-4">
                      En se remettant à circuler, l'énergie va dissoudre les
                      blocages, sources de nombreux problèmes organiques,
                      physiologiques et psychologiques présents ou anciens.
                    </p>
                    <p className="text-gray-700 mb-4">
                      L'équilibrage énergétique aide également à évacuer le
                      stress, les émotions refoulées, responsables de bien des
                      dysfonctionnements et, régule à un niveau subtil les
                      glandes endocrines.
                    </p>
                    <p className="text-gray-700">
                      Cette séance offre aussi l'avantage de procurer un profond
                      état de bien-être et de relaxation.
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
