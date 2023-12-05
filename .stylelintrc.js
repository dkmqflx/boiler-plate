const propertyGroups = require('stylelint-config-recess-order/groups');

module.exports = {
  customSyntax: 'postcss-styled-syntax',
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-order': propertyGroups.map((group) => ({
      ...group,
      emptyLineBefore: 'always',
      noEmptyLineBetween: true,
    })),
    'declaration-empty-line-before': null,
  },
};
