/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "bgblue": "#1a1f3b",
        "emeraldCustom": '#27AE60'
      },
      container:{
        "containerColum":"flex overflow-hidden items-center justify-center text-center rounded-lg  border-2",
        "container-row":"flex flex-wrap justify-evenly items-center w-[1300px] rounded-xl",
      },
    },
  },
  plugins: [],
}
