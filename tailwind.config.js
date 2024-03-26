import daisyui from 'daisyui'

export default {
  content: ['./components/**/*.vue', './pages/**/*.vue', './public/index.html'],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          'color-scheme': 'dark',
          primary: '#8D36FF',
          'primary-content': '#ffffff',
          secondary: '#000000',
          'secondary-content': '#ffffff',
          accent: '#F3B317',
          'accent-content': '#07312D',
          neutral: '#D0D0D1',
          'neutral-content': '#3D3D3D',
          'base-100': '#1f2937',
          'base-200': '#323f4b',
          'base-300': '#3e4c59',
          'base-content': '#e4e7eb',
          '*': { 'border-color': '#374151' },
        },
      },
      {
        light: {
          'color-scheme': 'light',
          primary: '#8D36FF',
          'primary-content': '#ffffff',
          secondary: '#000000',
          'secondary-content': '#ffffff',
          accent: '#F3B317',
          'accent-content': '#07312D',
          neutral: '#D0D0D1',
          'neutral-content': '#3D3D3D',
          'base-100': '#ffffff',
          'base-200': '#fafafb',
          'base-300': '#f5f5f7',
          'base-content': '#212121',
          '*': { 'border-color': '#e5e7eb' },
        },
      },
    ],
  },
}
