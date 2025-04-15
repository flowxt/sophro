"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: "",
    politique: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulation d'envoi (à remplacer par un vrai service d'envoi d'emails)
    try {
      // Ici, implémentez l'envoi réel du formulaire
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        message: "",
        politique: false,
      });
    } catch (err) {
      setError(
        "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#FDF6F0]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="section-title">Contactez-moi</h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Informations de contact */}
            <div className="bg-[#FDF6F0] p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-[#A45C40]">
                Informations
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-[#F9D1AB] w-10 h-10 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Adresse</h4>
                    <p className="text-gray-700">
                      417 route de Bange, 74540 ALLEVES
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-[#F9D1AB] w-10 h-10 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Téléphone
                    </h4>
                    <p className="text-gray-700">+33 6 50 09 56 62</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-[#F9D1AB] w-10 h-10 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-700">harmonieetsens74@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-[#F9D1AB] w-10 h-10 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
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
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Horaires</h4>
                    <p className="text-gray-700">
                      Lundi - Vendredi : Voir calendrier de disponibilités
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="nom"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Votre nom et prénom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telephone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    placeholder="06 XX XX XX XX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Précisez votre demande, vos disponibilités pour un rendez-vous à Annecy, ou toute question sur les thérapies proposées..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="politique"
                    name="politique"
                    checked={formData.politique}
                    onChange={handleChange}
                    required
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="politique" className="text-sm text-gray-600">
                    J&apos;accepte que mes données soient utilisées dans le
                    strict cadre de ma demande de contact *
                  </label>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#F9D1AB] hover:bg-[#E5B78F] text-white py-3 px-6 rounded-full transition-colors font-medium"
                  disabled={loading}
                >
                  {loading ? "Envoi en cours..." : "Envoyer"}
                </button>

                <p className="text-xs text-gray-500 mt-2">
                  * Champs obligatoires
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
