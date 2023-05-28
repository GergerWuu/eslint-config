const unitTestRules = require('./unitTestRules');

// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require('@rushstack/eslint-patch/modern-module-resolution');

// 工程中会extend两个规则集，一个是针对源码的，一个是针对单测的
// 即 extends: ['@ok/eslint-config', '@ok/eslint-config/jest'],
module.exports = {
  plugins: ['jest', 'jest-dom', 'testing-library'],
  overrides: [
    {
      files: ['**/__tests__/**/*', '**/__test__/**/*', '**/*.{spec,test}.*'],
      env: {
        'jest/globals': true,
      },
      rules: unitTestRules,
    },
  ],
};
