module.exports = {
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  rules: {
    'operator-linebreak': 'off',
    'prefer-destructuring': 'off',
    'guard-for-in': 'off',
    'default-case': 'off',
    'no-case-declarations': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    'no-restricted-syntax': 'off',
    'max-len': ['error', { code: 160 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': 'off',
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
};
