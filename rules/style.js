module.exports = {
  // https://cn.eslint.org/docs/rules/lines-between-class-members
  'lines-between-class-members': [
    'error',
    'always',
    { exceptAfterSingleLine: true },
  ],
  // https://cn.eslint.org/docs/rules/max-lines#enforce-a-maximum-file-length-max-lines
  'max-lines': [
    'error',
    { max: 500, skipBlankLines: true, skipComments: true },
  ],
  // https://cn.eslint.org/docs/rules/max-params
  'max-params': ['warn', 3],
  // https://cn.eslint.org/docs/rules/no-plusplus
  'no-plusplus': ['off'],
  // https://github.com/prettier/eslint-plugin-prettier
  'prettier/prettier': 'error',

  // disallow dangling underscores in identifiers
  // https://eslint.org/docs/rules/no-underscore-dangle
  'no-underscore-dangle': [
    'error',
    {
      allow: ['__INIT_STATE__'],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    },
  ],
};
