const rules = require('./rules');
const tsRules = require('./tsRules');

module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['prettier', 'react-hooks', 'promise', 'jsx-a11y'],
  rules,
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      plugins: ['@typescript-eslint'],
      extends: ['airbnb-typescript', 'prettier'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: tsRules,
    },
  ],
};
