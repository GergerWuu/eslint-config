const bestPracticesRules = require('./best-practices');
const es6Rules = require('./es6');
const importsRules = require('./imports');
const jsxA11yRules = require('./jsx-a11y');
const promiseRules = require('./promise');
const reactRules = require('./react');
const styleRules = require('./style');

module.exports = {
  ...bestPracticesRules,
  ...es6Rules,
  ...importsRules,
  ...reactRules,
  ...styleRules,
  ...promiseRules,
  ...jsxA11yRules,
};
