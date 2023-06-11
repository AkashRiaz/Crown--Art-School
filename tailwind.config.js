/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#5180ef",
        
"secondary": "#dd40d0",
        
"accent": "#76f2a8",
        
"neutral": "#1e2124",
        
"base-100": "#fafafa",
        
"info": "#6dade9",
        
"success": "#3ddb94",
        
"warning": "#f9cf67",
        
"error": "#ec2748",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

