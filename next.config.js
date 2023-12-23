/**
 * @type {import('next').NextConfig}
 */

const nextTranslate = require("next-translate-plugin");

const nextConfig = {
  ...nextTranslate(),

  compiler: {
    // Enable styled-components
    styledComponents: true,
  },
  // Internationalization (i18n) configuration
  i18n: {
    // List of locales you want to support
    locales: ["en", "si", "sr"],
    // The default locale you want to use
    defaultLocale: "sr",
  },
  // Any additional configurations can be added here
};

module.exports = nextConfig;
