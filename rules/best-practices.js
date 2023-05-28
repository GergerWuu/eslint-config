module.exports = {
  // https://cn.eslint.org/docs/rules/class-methods-use-this
  'class-methods-use-this': ['off'],
  // https://cn.eslint.org/docs/rules/curly
  curly: ['error', 'all'],
  // https://cn.eslint.org/docs/rules/eqeqeq
  eqeqeq: ['off'],
  // https://cn.eslint.org/docs/rules/no-else-return
  'no-else-return': ['error', { allowElseIf: true }],
  // https://cn.eslint.org/docs/rules/no-unused-expressions#disallow-unused-expressions-no-unused-expressions
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: false,
    },
  ],
};
