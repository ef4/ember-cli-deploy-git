module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:n/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier"],
  env: {
    node: true,
  },
  rules: {
    "prettier/prettier": ["error"],
  },
};
