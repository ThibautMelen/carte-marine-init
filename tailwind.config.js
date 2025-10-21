/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        maritime: {
          deep: '#0A2342',      // Navy
          marine: '#2C5F7F',    // Maritime blue
          azure: '#4A90B8',     // Bright blue
          sky: '#7BC8E8',       // Sky blue
          seafoam: '#A8D8EA',   // Light blue
          coral: '#FF6F61',     // Coral
          sand: '#E8D5C4',      // Sand beige
          emerald: '#2ECC71',   // Green
          slate: '#6B7C8C',     // Slate gray
          white: '#F9F9F9',     // Off-white
        }
      },
      fontFamily: {
        title: ['Montserrat', 'sans-serif'],
        body: ['Lora', 'serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      }
    },
  },
  plugins: [],
}
