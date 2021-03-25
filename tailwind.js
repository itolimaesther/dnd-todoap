const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    inset: {
     '82': '22rem',
    }
  },
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

      const circlePosition = {
        'circle1':{
          top: '5%',
          right: '15%'
        },
        'circle2':{
          top: '5%',
          right: '10%'
        }
      }
      
      
      addComponents(bgColor, circlePosition)
    })
  ],
}