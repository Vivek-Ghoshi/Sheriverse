import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add your font here
        inter: ["Inter","sans-serif"],
      },
    },
  },
  plugins: [react(),tailwindcss()],
})

// animation: {
//   "spin-slow": "spin 10s linear infinite",
//   "fade-in": "fadeIn 2s ease-in-out",
//   glow: "glow 3s infinite alternate",
// },
// keyframes: {
//   fadeIn: {
//     "0%": { opacity: 0 },
//     "100%": { opacity: 1 },
//   },
//   glow: {
//     "0%": { opacity: 0.2 },
//     "100%": { opacity: 0.6 },
//   },