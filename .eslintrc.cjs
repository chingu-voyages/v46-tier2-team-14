module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh',"simple-import-sort","jsx-a11y"],
  rules: {
    "simple-import-sort/imports": "error",// will sort the import 
    "simple-import-sort/exports": "error",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "arrow-body-style": ["error", "as-needed"],//This rule can enforce or disallow the use of braces around arrow function body.
    "react/react-in-jsx-scope":["off"],
    "react/no-array-index-key": "error",//error  if an element uses an Array index in its key.
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",//enforce rules of hooks
  },
}
