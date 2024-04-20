/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
    "vue/require-valid-default-prop": "off",
    'vue/no-unused-vars': 'off',
    'valid-v-for': 'off',
    'no-mutating-props': 'off'
  }
}
