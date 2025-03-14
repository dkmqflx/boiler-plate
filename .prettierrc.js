module.exports = {
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 120,

  plugins: ['@trivago/prettier-plugin-sort-imports'],

  importOrder: [
    '^react$',
    '^next/(.*)$',
    '<THIRD_PARTY_MODULES>',

    '^@/*',

  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  
  
}
