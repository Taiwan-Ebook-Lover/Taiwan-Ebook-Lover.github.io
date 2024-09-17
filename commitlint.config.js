module.exports = {
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'perf']
    ],
    'type-empty': [2, 'never'],
    'type-case': [0],
    'scope-case': [0],
    'subject-empty': [2, 'never'],
    'subject-case': [0],
    'header-max-length': [0],
    'subject-full-stop': [0],
  }
};
