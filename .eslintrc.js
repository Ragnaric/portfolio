module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'indent': [
      'warn',
      2
    ],
    'linebreak-style': [
      'warn',
      'unix'
    ],
    'no-undef': [
      'warn'
    ],
    'quotes': [
      'warn',
      'single'
    ],
    'react/no-unescaped-entities': 0,
    'semi': [
      'warn',
      'always'
    ]
  }
};
