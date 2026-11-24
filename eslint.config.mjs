import js from "@eslint/js";
import globals from "globals";

export default [
    {
        files: ["js/**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "script",
            globals: globals.browser
        },
        rules: js.configs.recommended.rules
    },
    {
        files: ["js/lunch.js"],
        languageOptions: {
            globals: {
                dishes: "readonly"
            }
        }
    }
];