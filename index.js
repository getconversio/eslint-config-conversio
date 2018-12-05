module.exports = {
  extends: [
    'airbnb-base',
    './rules/react'
  ],
  env: {
    node: true,
    es6: true
  },
  globals: {
    fetch: true,
    Headers: true,
    Request: true,
    URL: true,
    FormData: true
  },
  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'consistent-return': 'off',
    'default-case': 'off',
    'func-names': 'off',
    'function-paren-newline': ['error', 'consistent'],
    'generator-star-spacing': ['error', { before: true, after: true }],
    'import/no-dynamic-require': 'off',
    indent: ['error', 2, {
      MemberExpression: 'off',
      SwitchCase: 1
    }],
    'no-cond-assign': ['error', 'except-parens'],
    'no-confusing-arrow': 'off',
    'no-continue': 'off',
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-param-reassign': 'off',
    'no-path-concat': 'off',
    'no-plusplus': 'off',
    'no-restricted-properties': 'off',
    'no-return-assign': 'off',
    'no-return-await': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': ['error', { consistent: true }],
    'one-var': 'off',
    'operator-linebreak': ['warn', 'after'],
    'prefer-template': 'off',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    strict: 'off'
  }
}
