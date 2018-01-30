module.exports = {
  extends: ['airbnb-base'],
  env: {
    node: true,
    es6: true
  },
  globals: {
    fetch: true,
    Headers: true,
    Request: true
  },
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': 'off',
    'comma-dangle': ['error', 'never'],
    'consistent-return': 'off',
    'default-case': 'off',
    'func-names': 'off',
    'generator-star-spacing': ['error', { before: true, after: true }],
    'no-confusing-arrow': 'off',
    'no-continue': 'off',
    'no-param-reassign': 'off',
    'no-path-concat': 'off',
    'no-plusplus': 'off',
    'no-restricted-properties': 'off',
    'no-return-assign': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'one-var': 'off',
    'prefer-template': 'off',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    strict: 'off',
    'import/no-dynamic-require': 'off',
    'no-cond-assign': ['error', 'except-parens'],
    indent: ['error', 2, {
      MemberExpression: 'off',
      SwitchCase: 1
    }],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }]
  }
}
