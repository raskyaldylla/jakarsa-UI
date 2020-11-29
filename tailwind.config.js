module.exports =  {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  important: false,
  purge: ["./src/**/*.svelte", "./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
    },
  },
  variants: {},
  plugins: [],
}
