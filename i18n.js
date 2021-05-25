const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
  otherLanguages: ["pt", "en", "es", "fr", "de"],
  defaultNS: "common",
  localeSubpaths: {
    pt: "pt",
    en: "en",
    es: "es",
    fr: "fr",
    de: "de",
  },
  localePath: "public/static/locales",
});
