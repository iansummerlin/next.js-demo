const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
    colors: {
      ...colors,
      twitter: 'var(--color-twitter)',
      facebook: 'var(--color-facebook)',
      messenger: 'var(--color-messenger)',
      instagram: 'var(--color-instagram)',
      linkedin: 'var(--color-linkedin)',
      appstore: 'var(--color-appstore)',
      playstore: 'var(--color-playstore)',
    }
  },
  variants: {},
  plugins: [],
}
