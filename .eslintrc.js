module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-unused-vars': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'no-console': 0,
    'no-empty': 0,
    'consistent-return': 0,
    'linebreak-style': 0,
  },
};
