/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Activa el modo oscuro basado en clases
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Archivos dentro de src
    "./public/index.html",       // Incluye el archivo HTML principal
  ],
  theme: {
    extend: {
      screens: {
        // Breakpoints adicionales para más control
        xs: "480px", // Dispositivos muy pequeños
        '3xl': "1920px", // Pantallas extra grandes
      },
      colors: {
        primary: "#338ef7",
        secondary: "#7828C8",
        // Tus colores personalizados ya son bastante completos
        white: "#FFFFFF",
        black: "#000000",
        // Mantengo tus colores existentes
        blue: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#006FEE",
          600: "#005bc4",
          700: "#004493",
          800: "#002e62",
          900: "#001731",
        },
        // Añadir más colores si es necesario
      },
      transitionProperty: {
        height: "height",
      },
      animation: {
        fade: "fadeIn 2s ease-in-out",
        blob: "blob 7s infinite",
        bounceSlow: "bounce 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(30px, -20px) scale(1.1)" },
        },
      },
    },

  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#006FEE",
          secondary: "#7828C8",
          accent: "#17C964",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
        dark: {
          primary: "#338ef7",
          secondary: "#AE7EDE",
          accent: "#45D483",
          neutral: "#191D24",
          "base-100": "#2A2E37",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"), // Herramientas de UI estilizadas
    require("@tailwindcss/forms"), // Mejora formularios
    require("@tailwindcss/typography"), // Para textos largos y blogs
    require("@tailwindcss/aspect-ratio"), // Para manejar proporciones en imágenes/videos
    require("tailwind-scrollbar-hide"), // Oculta barras de desplazamiento
  ],
  corePlugins: {
    preflight: false,
  },
};