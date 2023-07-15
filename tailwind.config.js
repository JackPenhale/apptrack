/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          
          "primary": "#ab95e2",
          
          "secondary": "#87e5a2",
                   
          "accent": "#6ae8e1",
                   
          "neutral": "#1f202e",
                   
          "base-100": "#242847",
                   
          "info": "#8ab8f0",
                   
          "success": "#19674d",
                   
          "warning": "#9d6f0b",
                   
          "error": "#dc384b",
        },
      },
      {
        light: {
          primary: "#c9b204",

          secondary: "#c084e8",

          accent: "#d9f957",

          neutral: "#242432",

          "base-100": "#ffffff",

          info: "#6caeda",

          success: "#0f5732",

          warning: "#bf8003",

          error: "#ec3b32",
        },
      },
    ],
  },
};
