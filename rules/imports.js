module.exports = {
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
  'import/no-cycle': ['off'],
  // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
  'import/prefer-default-export': ['off'],
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        '**/__test__/**', // jest pattern
        '**/__mocks__/**', // jest pattern
        '**/jest.config.js', // jest config
        '**/.eslintrc.js', // eslint config
      ],
      optionalDependencies: false,
    },
  ],
  'import/order': [
    'warn',
    {
      pathGroups: [
        {
          pattern: '{react,react*}',
          group: 'external',
          position: 'before',
        },
        {
          pattern: '@gergerwuue/*',
          group: 'external',
          position: 'after',
        },
        {
          pattern: '{@src/**,_src/**}',
          group: 'internal',
          position: 'before',
        },
      ],
      pathGroupsExcludedImportTypes: ['builtin'],
      groups: [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
        'object',
        'type',
      ],
      alphabetize: {
        order: 'asc',
      },
      'newlines-between': 'always',
      distinctGroup: false,
    },
  ],
};
