import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#fea928',
        secondary: '#ed8900',
      },
      container:{
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        }
      }
    },
    plugins: [],
  },
})
