module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'prettier'
  ],
  parserOptions: {
    sourceType: "module",
  },
  env : {
    "browser" : true,
    "node" : true,
    "es6" : true
  },
  plugins: ['prettier'],
  globals: {
    it: true,
    expect:true,
    describe: true,
    fail: true,
    beforeEach: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true
      }
    ], 
    "node/no-unsupported-features/es-syntax" : 0
  },
};
