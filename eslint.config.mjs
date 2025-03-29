import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
    { files: ["**/*.js"], languageOptions: { globals: globals.browser } },
    { files: ["**/*.js"], plugins: { js }, extends: ["js/recommended"] },
    {
        rules: {
            semi: "warn",
            "no-unused-vars": "warn",
            "no-undef": "warn",
            "no-console": "warn",
        },
    },
    globalIgnores(["build/**/*", "node_modules"]),
]);
