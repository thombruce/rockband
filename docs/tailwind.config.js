const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    options: {
      safelist: [
        /data-theme$/,
      ]
    }
  },
  daisyui: {
    themes: [
      {
        tnt: {
          'primary' : colors.red['600'],
          'primary-focus' : colors.red['700'],
          'primary-content' : colors.warmGray['50'],

          'secondary' : '#f6d860', // TODO
          'secondary-focus' : '#f3cc30', // TODO
          'secondary-content' : '#ffffff', // TODO

          'accent' : '#37cdbe', // TODO
          'accent-focus' : '#2aa79b', // TODO
          'accent-content' : '#ffffff', // TODO

          'neutral' : colors.red['500'],
          'neutral-focus' : colors.red['600'],
          'neutral-content' : colors.warmGray['50'],

          'base-100' : colors.warmGray['50'],
          'base-200' : colors.warmGray['100'],
          'base-300' : colors.warmGray['200'],
          'base-content' : colors.warmGray['900'],

          'info' : colors.red['400'],
          'success' : colors.green['600'],
          'warning' : colors.orange['500'],
          'error' : colors.red['700'],
        }
      },
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
    ]
  }
}
