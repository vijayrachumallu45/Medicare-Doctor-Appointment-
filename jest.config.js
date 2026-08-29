module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'server/**/*.js',
    '!server/seed/**',
    '!server/data/**'
  ],
  testMatch: [
    '**/tests/**/*.test.js'
  ]
};
