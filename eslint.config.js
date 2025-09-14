import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  {
    rules: {
      // Tambahkan aturan kustom Anda di sini
      // Misalnya:
      semi: ['error', 'never'],
      quotes: ['error', 'single']
    }
  }
];