module.exports = {
  'react/destructuring-assignment': ['off'],
  'react/forbid-prop-types': ['off'],
  'react/jsx-filename-extension': [
    'error',
    { extensions: ['.jsx', '.js', '.ts', '.tsx'] },
  ],
  'react/jsx-fragments': ['off'],
  'react/jsx-props-no-spreading': ['off'],
  'react/no-array-index-key': ['off'],
  'react/prop-types': ['off'],
  'react/sort-comp': ['off'],
  'react/state-in-constructor': ['off'],
  'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
  'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  'react/function-component-definition': [
    2,
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
};
