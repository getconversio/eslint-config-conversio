module.exports = {
  env: {
    browser: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react'],
  settings: {
    react: {
      pragma: 'React',
      version: '16.4'
    }
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/prop-types': ['error', { ignore: ['match'] }],
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/prefer-stateless-function': 'error',
    'react/no-unused-prop-types': 'warn',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-curly-spacing': ['error', { when: 'always', children: true }],
    'react/jsx-filename-extension': 'error',
    'react/jsx-equals-spacing': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'warn',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never'
    }],
    'react/no-unknown-property': ['error', { ignore: ['crossOrigin'] }],

    // Prevent usage of deprecated methods
    'react/no-deprecated': ['error'],

    // Require render() methods to return something
    'react/require-render-return': 'error',

    // Prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],

    // Prevent usage of .bind() in JSX props
    'react/jsx-no-bind': ['error', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    }],
  },
  extends: ['plugin:react/recommended']
};
