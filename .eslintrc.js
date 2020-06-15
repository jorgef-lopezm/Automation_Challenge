module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  plugins: ['wdio', 'chai-friendly'],
  extends: ['airbnb-base', 'plugin:wdio/recommended'],
  globals: {
    assert: true,
    expect: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  root: true,
  rules: {
    'no-tabs': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'ignore',
      },
    ],
    'global-require': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'max-len': ['error', 100],
    'new-cap': ['error', { newIsCap: true }],
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
    strict: 'off',
    'valid-jsdoc': ['error', { requireReturn: false }],
    'space-before-function-paren': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': ['off', { allowForLoopAfterthoughts: true }],
    curly: ['error', 'multi'],
    'nonblock-statement-body-position': ['error', 'below'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2,
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.json'],
      },
    },
  },
};
