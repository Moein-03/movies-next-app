/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
          "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/actions/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/store/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/styles/**/*.{js,ts,jsx,tsx,mdx}"
     ],
          theme: {
          extend: {},
     },
          plugins: [],
};