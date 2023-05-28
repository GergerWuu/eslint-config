const rules = require('../rules');

module.exports = {
  'react/require-default-props': 0,
  'react/display-name': 0,

  // Replace Airbnb 'no-unused-expressions' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': rules['no-unused-expressions'],

  // Replace Airbnb 'lines-between-class-members' rule with '@typescript-eslint' version
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
  'lines-between-class-members': 'off',
  '@typescript-eslint/lines-between-class-members':
    rules['lines-between-class-members'],
  // Append 'ts' and 'tsx' extensions to Airbnb 'import/no-extraneous-dependencies' rule
  // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
  'import/no-extraneous-dependencies': [
    rules['import/no-extraneous-dependencies'][0],
    {
      ...rules['import/no-extraneous-dependencies'][1],
      devDependencies: rules[
        'import/no-extraneous-dependencies'
      ][1].devDependencies.reduce((result, devDep) => {
        const toAppend = [devDep];
        const devDepWithTs = devDep.replace(/\bjs(x?)\b/g, 'ts$1');
        if (devDepWithTs !== devDep) {
          toAppend.push(devDepWithTs);
        }
        return [...result, ...toAppend];
      }, []),
    },
  ],

  // Replace Airbnb 'camelcase' rule with '@typescript-eslint/naming-convention'
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
  camelcase: 'off',
  // The `@typescript-eslint/naming-convention` rule allows `leadingUnderscore` and `trailingUnderscore` settings. However, the existing `no-underscore-dangle` rule already takes care of this.
  '@typescript-eslint/naming-convention': [
    'error',
    // Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
    {
      selector: 'variable',
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    },
    // Allow camelCase functions (23.2), and PascalCase functions (23.8)
    {
      selector: 'function',
      format: ['camelCase', 'PascalCase'],
    },
    // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
  ],
};
