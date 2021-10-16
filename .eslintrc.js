const { getESLintConfig } = require('@applint/spec')

module.exports = getESLintConfig('react-ts', {
  'react/prop-types': 0
})