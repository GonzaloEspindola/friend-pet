import daisyui from 'daisyui'

export default {
  content: ['./components/**/*.vue', './pages/**/*.vue', './public/index.html'],
  plugins: [daisyui],
  themes: [
    {
      light: {
        primary: '#e84f2c',
        secondary: 'teal',
        'neutral-content': 'red',
      },
      dark: {
        primary: '#e84f2c',
        secondary: 'teal',
        'neutral-content': 'red',
      },
    },
  ],
}
