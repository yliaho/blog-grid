module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },

  extends: ['plugin:prettier/recommended'],

  plugins: ['prettier'],

  // add your custom rules here
  rules: {}
}
