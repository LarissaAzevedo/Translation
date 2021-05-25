const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {
  pt: "pt",
  en: "en",
  es: "es",
  fr: "fr",
  de: "de",
};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
};
