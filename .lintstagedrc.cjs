module.exports = {
  "*.{js,jsx,ts,tsx}": "eslint --ignore-path .gitignore --cache --fix",
  "*.{ts,tsx}": () => "npm run check:types",
  "*.{jsx,ts,tsx,css,scss}": "prettier --ignore-path .gitignore --write",
};
