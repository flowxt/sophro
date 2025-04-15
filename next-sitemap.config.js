/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://harmonieetsens74.fr",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  // Ajouter manuellement les sections importantes du site (comme ce sont des ancres #)
  additionalPaths: async (config) => {
    const result = [
      { loc: "/#sophro-analyse", priority: 0.8, changefreq: "monthly" },
      { loc: "/#constellations", priority: 0.8, changefreq: "monthly" },
      { loc: "/#magnetisme", priority: 0.8, changefreq: "monthly" },
      { loc: "/#pour-qui", priority: 0.8, changefreq: "monthly" },
      { loc: "/#a-propos", priority: 0.7, changefreq: "monthly" },
      { loc: "/#cabinet", priority: 0.7, changefreq: "monthly" },
      { loc: "/#reservations", priority: 0.9, changefreq: "weekly" },
      { loc: "/#contact", priority: 0.8, changefreq: "monthly" },
    ];
    return result;
  },
};
