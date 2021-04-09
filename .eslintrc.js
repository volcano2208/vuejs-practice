/* eslint-disable */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 2 }],
    'import/newline-after-import': ['warn', { count: 1 }],
    'linebreak-style': 0,
    'operator-linebreak': [2, 'after'],
    'quotes': ["warn", "double", { "allowTemplateLiterals": true }]
  },
};
