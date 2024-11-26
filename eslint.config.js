module.exports = {
  root: true,
  env: {
    window: true,
  },
  extends:[
    'react-app',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
  } 
}