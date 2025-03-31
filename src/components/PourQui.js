"use client";

import { motion } from "framer-motion";

export default function PourQui() {
  const categories = [
    {
      titre: "Stress & Anxiété",
      items: [
        "Dépression, anxiété, angoisse, tristesse",
        "Repli sur soi",
        "Hypervigilance constante",
        "Troubles du sommeil, fatigue chronique",
        "Difficulté à me reposer",
      ],
    },
    {
      titre: "Relations & Comportements",
      items: [
        "Réactions disproportionnées face à des situations",
        "Attirance systématique pour des personnes néfastes",
        "Difficultés à faire confiance",
        "Problèmes relationnels (famille, travail)",
        "Sentiment de ne pas être à ma place",
      ],
    },
    {
      titre: "Peurs & Phobies",
      items: [
        "Peurs irrationnelles",
        "Phobie des endroits clos, de l'eau, des aiguilles",
        "Phobie des hôpitaux, des araignées",
        "Peur du noir, du vide",
        "Problèmes dans les groupes, difficulté à s'exprimer",
      ],
    },
    {
      titre: "Manifestations Corporelles",
      items: [
        "Douleurs chroniques (sans explication médicale logique)",
        "Allergies, difficultés respiratoires",
        "Migraines, céphalées, maux de ventre",
        "Infections urinaires à répétition",
        "Intolérance au toucher",
      ],
    },
    {
      titre: "Troubles du Comportement",
      items: [
        "Colère permanente, intolérance à l'injustice",
        "Difficulté à mener les actions à bien",
        "Procrastination, attente de l'urgence pour agir",
        "Retards chroniques",
        "Troubles alimentaires (boulimie, anorexie)",
        "Addictions (alcool, tabac, drogue, jeux)",
      ],
    },
    {
      titre: "Image de Soi",
      items: [
        "Sentiment de ne pas être comme les autres",
        "Impression d'être vulnérable ou fragile",
        "Sentiment d'incomplétude",
        "Dévalorisation constante",
        "Mauvaise image de soi",
        "Blocages et résistances au changement",
      ],
    },
  ];

  return (
    <section id="pour-qui" className="py-20 bg-[#FDF6F0]">
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
              Pour qui sont ces thérapies ?
            </h2>
            <div className="w-20 h-1 bg-[#F9D1AB] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Si vous vous reconnaissez dans un ou plusieurs de ces symptômes,
              la Sophro-Analyse, les Constellations Familiales ou le Magnétisme
              pourraient vous aider :
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((categorie, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="bg-[#F9D1AB] py-3 px-6">
                  <h3 className="text-lg font-semibold text-white">
                    {categorie.titre}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {categorie.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start">
                        <span className="text-[#F9D1AB] mr-2 mt-0.5">→</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 italic">
              * Cette liste n'est pas exhaustive. N'hésitez pas à me contacter
              pour discuter de votre situation personnelle.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
