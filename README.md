This package provides .eslintrc as an extensible shared config.

1. Install

   `npm install -D @gergerwuu/eslint-config`

2. Add the following configuration to the `eslintrc.js` file
   ```js
   module.exports = {
     parser: '@babel/eslint-parser',
     extends: ['@gergerwuu/eslint-config'],
   };
   ```
3. If need lint for `jest`, please add another `extends` like this
   ```js
   module.exports = {
     parser: '@babel/eslint-parser',
     extends: ['@gergerwuu/eslint-config', '@gergerwuu/eslint-config/jest'],
   };
   ```
4. Only provide `rules`, other config, such as `parser`, `env`, `parserOptions`, `settings`... It needs to be configured in the business project.

5. Style Guide: https://github.com/airbnb/javascript
