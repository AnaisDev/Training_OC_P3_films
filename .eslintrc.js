module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: [
          'Practical',
          'Booking',
          'Contact',
          'Footer',
          'Form',
          'Header',
          'Home',
          'Modal',
          'Comment',
          'Movies',
          'Sheet',
          'Nav',
          'News',
        ],
      },
    ],
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
};
