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
              Magnétisme en Haute-Savoie | Allèves près d&apos;Annecy
            </h2>
            <div className="w-20 h-1 bg-[#F9D1AB] mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-[#FDF6F0] to-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="md:flex gap-10">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h3 className="text-2xl font-semibold mb-4 text-[#A45C40]">
                    La méthode
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Après plusieurs années de pratique, Jean-François CAMICAS
                    (magnétiseur à Meaux) a développé sa propre méthode.
                    J&apos;ai le privilège de faire partie des personnes
                    qu&apos;il a formées.
                  </p>

                  <h4 className="text-xl font-semibold mb-3 text-[#A45C40]">
                    Les étapes d&apos;une séance
                  </h4>
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FDF6F0] text-[#A45C40] flex items-center justify-center font-bold">
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
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FDF6F0] text-[#A45C40] flex items-center justify-center font-bold">
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
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FDF6F0] text-[#A45C40] flex items-center justify-center font-bold">
                        3
                      </span>
                      <div className="ml-4">
                        <h5 className="font-medium text-gray-800">
                          Rééquilibrage énergétique
                        </h5>
                        <p className="text-gray-600">
                          Harmonisation du flux d&apos;énergie et réalignement
                          des chakras
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold mb-4 text-[#A45C40]">
                    Les bienfaits
                  </h3>
                  <div className="bg-white rounded-lg p-6 shadow-inner">
                    <p className="text-gray-700 mb-4">
                      Par imposition des mains, le magnétiseur rééquilibre le
                      système énergétique et permet à l&apos;énergie de circuler
                      harmonieusement dans les corps subtils et dans le corps
                      physique.
                    </p>
                    <p className="text-gray-700 mb-4">
                      En se remettant à circuler, l&apos;énergie va dissoudre
                      les blocages, sources de nombreux problèmes organiques,
                      physiologiques et psychologiques présents ou anciens.
                    </p>
                    <p className="text-gray-700 mb-4">
                      L&apos;équilibrage énergétique aide également à évacuer le
                      stress, les émotions refoulées, responsables de bien des
                      dysfonctionnements et, régule à un niveau subtil les
                      glandes endocrines.
                    </p>
                    <p className="text-gray-700">
                      Cette séance offre aussi l&apos;avantage de procurer un
                      profond état de bien-être et de relaxation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-[#FDF6F0] rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-[#F9D1AB] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-6 h-6"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h2v-2h-2v2zm1.61-9.96c-.36.28-.61.86-.61 1.18h2c0-.92.64-1.4.95-1.63.35-.26.65-.48.65-1.09 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5h2c0-.28.22-.5.5-.5s.5.22.5.5c0 .12-.06.31-.29.48-.42.32-.7.52-.7 1.06z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#A45C40]">
                Pour quels maux ?
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#F9D1AB] mr-2">•</span>
                  <span>Douleurs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F9D1AB] mr-2">•</span>
                  <span>Brûlures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F9D1AB] mr-2">•</span>
                  <span>Zonas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F9D1AB] mr-2">•</span>
                  <span>Eczéma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#F9D1AB] mr-2">•</span>
                  <span>Problèmes circulatoires</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FDF6F0] rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-[#F9D1AB] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-6 h-6"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h2v-2h-2v2zm1.61-9.96c-.36.28-.61.86-.61 1.18h2c0-.92.64-1.4.95-1.63.35-.26.65-.48.65-1.09 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5h2c0-.28.22-.5.5-.5s.5.22.5.5c0 .12-.06.31-.29.48-.42.32-.7.52-.7 1.06z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#A45C40]">
                Effets bénéfiques
              </h3>
              <p className="text-gray-700">
                En se remettant à circuler, l&apos;énergie va dissoudre les
                blocages, sources de nombreux problèmes organiques,
                physiologiques et psychologiques présents ou anciens.
              </p>
            </div>

            <div className="bg-[#FDF6F0] rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-[#F9D1AB] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-6 h-6"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h2v-2h-2v2zm1.61-9.96c-.36.28-.61.86-.61 1.18h2c0-.92.64-1.4.95-1.63.35-.26.65-.48.65-1.09 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5h2c0-.28.22-.5.5-.5s.5.22.5.5c0 .12-.06.31-.29.48-.42.32-.7.52-.7 1.06z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#A45C40]">
                Bon à savoir
              </h3>
              <p className="text-gray-700">
                L&apos;équilibrage énergétique aide également à évacuer le
                stress, les émotions refoulées, responsables de bien des
                dysfonctionnements et, régule à un niveau subtil les glandes
                endocrines.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
