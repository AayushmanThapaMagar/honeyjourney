/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
});