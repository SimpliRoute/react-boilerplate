module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off'
  },
  extends: ['plugin:@typescript-eslint/recommended', 'react-app'],
};
