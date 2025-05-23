import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Liste des villes de Haute-Savoie pour le SEO
  const villesHauteSavoie = [
    "Annecy",
    "Annemasse",
    "Allèves",
    "Reignier-Esery",
    "La Roche-sur-Foron",
    "Chambéry",
    "Rumilly",
    "Bonneville",
    "Aix les Bains",
    "Seynod",
    "Saint-Julien-en-Genevois",
    "Gaillard",
    "Alby sur Chéran",
    "Haute-Savoie",
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold text-[#A45C40] mb-4">
              Harmonie & Sens
            </h3>
            <p className="text-gray-600 mb-4">
              Votre espace dédié au bien-être et à l&apos;équilibre en
              Haute-Savoie. Des approches thérapeutiques douces pour vous
              accompagner dans votre cheminement personnel.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100079974558928"
                target="_blank"
                rel="noopener noreferrer"
                title="Retrouvez-moi sur Facebook"
                className="text-[#F9D1AB] hover:text-[#A45C40] transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/stephanielassagne.sa/"
                target="_blank"
                rel="noopener noreferrer"
                title="Suivez-moi sur Instagram"
                className="text-[#F9D1AB] hover:text-[#A45C40] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/st%C3%A9phanie-lassagne-84270417b/"
                target="_blank"
                rel="noopener noreferrer"
                title="Retrouvez-moi sur LinkedIn"
                className="text-[#F9D1AB] hover:text-[#A45C40] transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#A45C40] mb-4">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sophro-analyse"
                  className="text-gray-600 hover:text-[#F9D1AB] transition-colors"
                >
                  Sophro-Analyse
                </a>
              </li>
              <li>
                <a
                  href="#constellations"
                  className="text-gray-600 hover:text-[#F9D1AB] transition-colors"
                >
                  Constellations Familiales
                </a>
              </li>
              <li>
                <a
                  href="#magnetisme"
                  className="text-gray-600 hover:text-[#F9D1AB] transition-colors"
                >
                  Magnétisme
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-[#F9D1AB] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#A45C40] mb-4">
              Coordonnées
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-[#F9D1AB] mr-2 mt-0.5"
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
                <span className="text-gray-400">
                  417 route de Banges, 74540 Allèves, Haute-Savoie
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-[#F9D1AB] mr-2 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-400">06 50 09 56 62</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-[#F9D1AB] mr-2 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400">
                  harmonieetsens74@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Harmonie & Sens. Tous droits réservés.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-[#F9D1AB] transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-[#F9D1AB] transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>

      {/* Villes desservies pour le SEO */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <h4 className="text-sm text-gray-400 mb-3">
            Nos thérapies disponibles en Haute-Savoie :
          </h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
            <span className="text-xs text-gray-500">
              <strong>Constellations Familiales</strong> à{" "}
              {villesHauteSavoie.map((ville, index) => (
                <span key={index}>
                  <a
                    href={`/#constellations`}
                    className="text-gray-400 hover:text-[#F9D1AB]"
                  >
                    {ville}
                  </a>
                  {index < villesHauteSavoie.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
            <span className="text-xs text-gray-500">
              <strong>Sophro-Analyse</strong> à{" "}
              {villesHauteSavoie.map((ville, index) => (
                <span key={index}>
                  <a
                    href={`/#sophro-analyse`}
                    className="text-gray-400 hover:text-[#F9D1AB]"
                  >
                    {ville}
                  </a>
                  {index < villesHauteSavoie.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <span className="text-xs text-gray-500">
              <strong>Magnétisme</strong> à{" "}
              {villesHauteSavoie.map((ville, index) => (
                <span key={index}>
                  <a
                    href={`/#magnetisme`}
                    className="text-gray-400 hover:text-[#F9D1AB]"
                  >
                    {ville}
                  </a>
                  {index < villesHauteSavoie.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
