module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['@nuxtjs', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [],
  rules: {
    'no-undef': 'off',
    'vue/multi-word-component-names': ['error', {
      ignores: ['default', 'index', 'add', '[name]', 'jikan', 'suuji', 'Header']
    }]
  }
}
