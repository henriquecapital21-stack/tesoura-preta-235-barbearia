import eslint from '@eslint/js';
import parser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
export default [{ ignores: ['dist'] }, { files: ['**/*.{ts,tsx}'], languageOptions: { parser, globals: { document: 'readonly' }, parserOptions: { ecmaFeatures: { jsx: true } } }, plugins: { '@typescript-eslint': tsPlugin, 'react-hooks': reactHooks, 'react-refresh': reactRefresh }, rules: { ...eslint.configs.recommended.rules, ...tsPlugin.configs.recommended.rules, 'no-undef': 'off', 'react-hooks/rules-of-hooks': 'error', 'react-hooks/exhaustive-deps': 'warn', 'react-refresh/only-export-components': ['warn', {allowConstantExport: true}] } }];
