module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [0, 'always', ['feat', 'fix', 'chore', 'build', 'style', 'test', 'docs']],
  },
};
