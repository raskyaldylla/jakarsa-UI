module.exports =  {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  important: false,
  purge: ["./src/**/*.svelte", "./src/**/*.html"],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      title: ['Playfair Display', 'serif']
    },
    extend: {
      colors: {
        "primary-light": 'var(--color-primary-light)',
        "primary-dark": 'var(--color-primary-dark)',
        "secondary": 'var(--color-secondary)',
      },
    },
  },
  variants: {},
  plugins: [],
}
