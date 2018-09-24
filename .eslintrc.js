module.exports = {
  'extends': 'airbnb',
  'rules': {
    'no-underscore-dangle': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/valid-expect': 'error'
  },
  'globals': {
    'window': true,
    'document': true,
    'location': true,
    'localStorage': true,
  },
  'env': {
    'jest/globals': true
  },
  'plugins': [
    'jest'
  ],
};
