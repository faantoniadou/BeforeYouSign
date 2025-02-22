/** @type {import('tailwindcss').Config} */

export const purge = ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'];
export const darkMode = false;
export const theme = {
  extend: {},
};
export const variants = {
  extend: {},
};
export const plugins = [];
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}",];

export default {
  content: [
    "../public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
}
