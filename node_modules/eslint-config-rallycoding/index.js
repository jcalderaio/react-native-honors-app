module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/node',
    './rules/react-a11y',
    './rules/react',
    './rules/strict',
    './rules/style',
    './rules/variables'
  ].map(require.resolve),
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 7,
    sourceType: 'module'
  },
  plugins: [
    'class-property'
  ],
  parser: 'babel-eslint',
  rules: {
    'strict': 0,
    'react/jsx-no-bind': 0,
    'indent': 0,
    'react/prefer-es6-class': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2,
    'react/jsx-indent': 0,
    'react/no-string-refs': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-indent-props': 0,
    'react/prop-types': 0,
    'react/no-did-mount-set-state': 0,
    'react/prefer-stateless-function': 0,
    'no-trailing-spaces': 0,
    'import/prefer-default-export': 0,
    'id-length': 0,
    'comma-dangle': 0,
    'new-cap': 0,
    'func-names': 0,
    'consistent-return': 0,
    'no-use-before-define': 0,
    'no-debugger': 0,
    'spaced-comment': 0,
    'no-console': 0,
    'no-alert': 0,
    'linebreak-style': 0
  }
};
