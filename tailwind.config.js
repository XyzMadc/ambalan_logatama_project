import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#775DD1",
                secondary: "#2B1577",
                tertiary: "#0E062A",
                navbar_primary: "#603FC1",
                navbar_secondary: "#744FDE",
                navbar_tertiary: "#8D6CEB",
                footer: "#3B2389",
            },
        },
    },

    plugins: [forms],
};
