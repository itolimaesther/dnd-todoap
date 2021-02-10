const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {},
    extend: {
  },
  variants: {},
  plugins: [
    plugin(function({ addComponents }){
      const bgColor = {
        '.bg-primary': {
          backgroundColor: '#230396',
        }
      }
      
      addComponents(bgColor)
    })
  ],
}