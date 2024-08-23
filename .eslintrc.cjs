module.exports = {
  root: true,
  ignorePatterns: ['eslint/**'],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:react/recommended',
    'prettier' // Đảm bảo Prettier là phần mở rộng cuối cùng
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
    'vue/require-valid-default-prop': 'off',
    'vue/no-unused-vars': 'off',
    'valid-v-for': 'off',
    'no-mutating-props': 'off',
    'semi': ['error', 'never'], // Không yêu cầu dấu chấm phẩy
    'prettier/prettier': [
      'error',
      {
        'semi': false, // Đồng bộ với cấu hình Prettier
        'trailingComma': 'none',
        'singleQuote': false,
        'jsxSingleQuote': true
      }
    ]
  }
}
