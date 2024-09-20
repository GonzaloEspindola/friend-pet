import daisyui from 'daisyui'

export default {
  content: ['./components/**/*.vue', './pages/**/*.vue', './public/index.html'],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          'color-scheme': 'dark',
          primary: '#F3B317',
          'primary-content': '#ffffff',
          secondary: '#1E1C32',
          'secondary-content': '#ffffff',
          accent: '#5CB85C',
          'accent-content': '#ffffff',
          neutral: '#374151',
          'neutral-content': '#ffffff',
          'base-100': '#1d232a',
          'base-200': '#1E293B',
          'base-300': '#334155',
          'base-content': '#E5E7EB',
          '*': { 'border-color': '#4B5563' },
          paragraph: '#ffffff',
        },
        light: {
          'color-scheme': 'light',
          primary: '#5CB85C',
          'primary-content': '#ffffff',
          secondary: '#1E1C32',
          'secondary-content': '#ffffff',
          accent: '#F3B317',
          'accent-content': '#07312D',
          neutral: '#96949C',
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
