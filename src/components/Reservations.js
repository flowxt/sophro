"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Reservations() {
  const reservations = [
    {
      titre: "Séance Sophro-Analyse",
      duree: "1h30",
      tarif: "70€",
      format: "Distanciel et présentiel possible",
      description:
        "Exploration profonde pour identifier et transformer les croyances limitantes et les schémas inconscients.",
      couleur: "#F9D1AB",
      couleurFoncee: "#A45C40",
      lien: "#", // À remplacer par le lien Calendly
    },
    {
      titre: "Séance Magnétisme",
      duree: "1h30",
      tarif: "50€",
      format: "Présentiel uniquement",
      description:
        "Séance énergétique pour favoriser l'équilibre et le bien-être physique et émotionnel.",
      couleur: "#BFD7EA",
      couleurFoncee: "#546D82",
      lien: "#", // À remplacer par le lien Calendly
    },
    {
      titre: "Constellation Familiale",
      duree: "2h/2h30",
      tarif: "100€",
      format: "Présentiel uniquement",
      description:
        "Séance approfondie pour libérer les schémas familiaux et restaurer l'équilibre dans votre système.",
      couleur: "#FADCE4",
      couleurFoncee: "#F2BED1",
      lien: "#", // À remplacer par le lien Calendly
    },
  ];

  return (
    <section id="reservations" className="py-20 bg-white overflow-x-hidden">
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
              Réserver une séance
            </h2>
            <div className="w-20 h-1 bg-[#F9D1AB] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choisissez le type de séance qui correspond à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {reservations.map((reservation, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  transition: { duration: 0.2 },
                }}
                className="bg-white rounded-xl shadow-lg overflow-hidden relative flex flex-col h-full"
              >
                <div
                  className="pt-8 px-6 pb-6 text-center"
                  style={{ backgroundColor: `${reservation.couleur}30` }} // Légère opacité
                >
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: reservation.couleurFoncee }}
                  >
                    {reservation.titre}
                  </h3>
                  <div className="text-3xl font-bold mb-2 text-gray-800">
                    {reservation.tarif}
                  </div>
                  <div className="flex items-center justify-center mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      style={{ color: reservation.couleurFoncee }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-600">{reservation.duree}</span>
                  </div>
                  <div className="text-sm text-gray-500 italic mb-4">
                    {reservation.format}
                  </div>
                </div>

                <div className="px-6 py-4 flex-grow">
                  <p className="text-gray-600">{reservation.description}</p>
                </div>

                <div className="px-6 pb-6 mt-auto">
                  <a
                    href={reservation.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 text-center rounded-full text-white font-medium transition-colors"
                    style={{
                      backgroundColor: reservation.couleurFoncee,
                      border: `1px solid ${reservation.couleurFoncee}`,
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "white";
                      e.currentTarget.style.color = reservation.couleurFoncee;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor =
                        reservation.couleurFoncee;
                      e.currentTarget.style.color = "white";
                    }}
                  >
                    Réserver
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500">
              Pour toute question concernant les séances ou la réservation,
              n&apos;hésitez pas à{" "}
              <a href="#contact" className="text-[#A45C40] hover:underline">
                me contacter
              </a>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
