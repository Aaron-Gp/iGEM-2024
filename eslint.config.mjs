import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
// import { } from '@nuxt/eslint-config/flat'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
    { name: 'glob files', files: ['**/*.{js,mjs,cjs,ts,vue}'] },
    { name: 'global ignores', ignores: ['.nuxt/', '.output/', 'dist/'] },
    {
        name: 'globals',
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
    },
    {
        name: '@eslint/js',
        files: ['**/*.{js,mjs,cjs,ts}'],
        ...pluginJs.configs.recommended,
    },
    ...tseslint.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    {
        name: "!vue",
        rules: {
            "vue/multi-word-component-names": "off"
        }
    },
    {
        name: "vue-parser",
        files: ['**/*.vue'],
        languageOptions: {
            parserOptions: { parser: tseslint.parser }
        },
    },
    {
        name: 'eslint-config-prettier',
        ...eslintConfigPrettier,
    },
]
