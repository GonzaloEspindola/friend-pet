import daisyui from 'daisyui'

export default {
  content: ['./components/**/*.vue', './pages/**/*.vue', './public/index.html'],
  plugins: [daisyui],
  themes: [
    {
      light: {
        ...require('daisyui/src/theming/themes')['light'],
        primary: 'blue',
        secondary: 'teal',
      },
    },
  ],
}
