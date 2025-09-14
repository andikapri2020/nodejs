import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      // Tambahkan aturan kustom Anda di sini
      // Misalnya:
      semi: ['error', 'always'],
      quotes: ['error', 'single']
    }
  }
];