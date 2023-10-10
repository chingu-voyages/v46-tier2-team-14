module.exports = {
  root: true,
  env: { browser: true, es2021: true , jest :true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    "prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  // parser: '@typescript-eslint/parser',
  parserOptions:{
      ecmaVersion:"latest",
      sourceType:'module',
      project:['./tsconfig.json', './tsconfig.node.json']
  },
  plugins: ["react-refresh","react","react-hooks","simple-import-sort","jsx-a11y"],
  rules: {
    "simple-import-sort/imports": "error",// will sort the import 
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",// will sort the import 
    "simple-import-sort/exports": "error",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope":["off"],
    "no-nested-ternary":0,// This rule is helpful in React
    "react-hooks/exhaustive-deps": "warn",
    "linebreak-style":['off'],
    "arrow-parens":0
  },
}
